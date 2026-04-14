const {otpGeneratorFn} = require("../helpers/otpGenerate");
const { sendEmail } = require("../helpers/sendEmail");
const userModel = require("../model/user.model");
const { apiResponse } = require("../utils/apiResponse");
const { asyncHandler } = require("../utils/asyncHandler");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


exports.registrationController = asyncHandler(async(req, res)=>{
    //res.send(req.body);
   // let{name, email, password, phone} = req.body
    const {name, email, password, phone} = req.body;
    let otp = otpGeneratorFn();
    // hash password
    const hashpassword =await bcrypt.hash(password, 12);

    const user = new userModel({
    email,
    name,
    password: hashpassword,
    phone,
    otp,
    otpexpire: Date.now() + 5 * 60 * 1000,
    });
    await user.save();
    sendEmail(email,otp, "verify");
    apiResponse(res, 201, "user created successfully!", user);
});



exports.loginController = asyncHandler(async(req, res)=>{
    const { email, password} = req.body;

    const finduser = await userModel.findOne({email}).select("+password");
     
    if(!finduser){
        apiResponse(res, 401, "Invalid Credentials" );
    }else{
        const passwordCheck = await bcrypt.compare(password, finduser.password);
        //bcrypt.compare(password, finduser.password, function(err, result){
            if(passwordCheck){
                const user = {
                    _id: finduser._id,
                    email: finduser.email,
                    name: finduser.name,
                    verified: finduser.verified,
                    role: finduser.role,
                };
                const accesstoken = jwt.sign(user, process.env.PRIVATE_KEY,{
                    expiresIn: "1h",
                });
                res.cookie("accesstoken",accesstoken,{maxAge: 3600000});
                /* statefull 
                req.session.secure = true;
                req.session.cookie.maxAge = 60 * 60 * 1000;
                req.session.user = user; */
            apiResponse(res, 200, "login successfully", {...user});
            //err.message || "bcrypt have an error"
        }else{
            apiResponse(res, 401, "Invalid credentials");
        }
    }
});

exports.otpVerifyController = asyncHandler(async(req, res)=>{
    const {email, otp} = req.body;
    const user = await userModel.findOne({email});
    if(user.verified){
        return apiResponse(res, 200, "You have already verified") 
    }else{
        if(!user){
        apiResponse(res, 404, "user not found");
    }else{
        //res.send(new Date());
        if(user.otpexpire < new Date()){
            //res.send("time expire");
            apiResponse(res, 400, "your OTP Time expire")
        }else{
            if(user.otp == otp){
                ((user.verified = true),(user.otp = null),(user.otpexpire = null ));
                await user.save();
                apiResponse(res, 200, "You are now verified");
            }else{
                apiResponse(res, 400, "OTP Not Match");
            }
        }
    }
    }

    
    //res.send("test");
    
}); 

exports.resentOtpController = asyncHandler(async(req, res)=>{
    const {email} = req.body;
    let otp = otpGeneratorFn();
    sendEmail(email, otp, "verify");
    const user = await userModel.findOne({email});
    user.otp = otp;
    user.otpexpire = Date.now() + 5 * 60 * 1000,
    await user.save();
    apiResponse(res, 200, "OTP has sent to your email address, Please check your email");
});

exports.forgetPasswordController = asyncHandler(async(req, res)=>{
    const {email} = req.body;
    let otp = otpGeneratorFn();
    sendEmail(email, otp,"forget" );

    const user = await userModel.findOne({email})
    user.forgetPasswordotp = otp;
    await user.save();
    apiResponse(res, 200, "forget password otp send successfully")
});

exports.resetPasswordController = asyncHandler(async(req, res)=>{
    const{email, otp, newpassword} = req.body;
    const user = await userModel.findOne({email});
    if(!user){
        apiResponse(res,404,  "user not found")
    }else{
        if(otp == user.forgetPasswordotp){
            let hashpassword = await bcrypt.hash(newpassword, 12);
            user.password = hashpassword;
            await user.save();

            apiResponse(res, 200,"password reset successfully");
        }else{
            apiResponse(res, 401, "invalid otp please try again ");
        }
    }
});

exports.allUsersConroller = asyncHandler(async(req, res)=>{

    const users = await userModel
    .find({})
    .select("-otp -otpexpire -forgetPasswordotp");
    apiResponse(res, 200, "users fetch successfully", users);
});

//module.exports = registrationController;
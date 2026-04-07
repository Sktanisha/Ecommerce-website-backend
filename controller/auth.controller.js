const { sendEmail } = require("../helpers/sendEmail");
const userModel = require("../model/user.model");
const { apiResponse } = require("../utils/apiResponse");
const { asyncHandler } = require("../utils/asyncHandler");
const bcrypt = require('bcrypt');
const otpGenerator = require('otp-generator')
const jwt = require('jsonwebtoken');

exports.registrationController = asyncHandler(async(req, res)=>{
    //res.send(req.body);
   // let{name, email, password, phone} = req.body
    const {name, email, password, phone} = req.body;
    const otp = otpGenerator.generate(6, { 
        digits: true,
        upperCaseAlphabets: false, 
        specialChars: false 
    });
    
    
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
    sendEmail(email,otp);
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
                const token = jwt.sign(user, process.env.PRIVATE_KEY);

            apiResponse(res, 200, "login successfully", {...user, token})
            //err.message || "bcrypt have an error"
        }else{
            apiResponse(res, 401, "Invalid credentials");
        }
    }
});

exports.otpVerifyController = asyncHandler(async(req, res)=>{
    const {email, otp} = req.body;
    const user = await userModel.findOne({email});
    if(!user){
        apiResponse(res, 404, "user not found");
    }
    //res.send("test");
})

//module.exports = registrationController;
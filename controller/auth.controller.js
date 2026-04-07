const { sendEmail } = require("../helpers/sendEmail");
const userModel = require("../model/user.model");
const { apiResponse } = require("../utils/apiResponse");
const { asyncHandler } = require("../utils/asyncHandler");
const bcrypt = require('bcrypt');
//const otpGenerator = require('otp-generator')

exports.registrationController = asyncHandler(async(req, res)=>{
    //res.send(req.body);
   // let{name, email, password, phone} = req.body
    const {name, email, password, phone} = req.body;
    //const otp = otpGenerator.generate(6, { 
    //    digits: true,
    //    upperCaseAlphabets: false, 
     //   specialChars: false 
    //});
    return;
    res.send(otp);
    // hash password
    const hashpassword =await bcrypt.hash(password, 12);

    const user = new userModel({
    email,
    name,
    password: hashpassword,
    phone,
    });
    await user.save();
    sendEmail(email);
    apiResponse(res, 201, "user created successfully!", user);
});



exports.loginController = (req, res)=>{
    res.send("login done ");
}

//module.exports = registrationController;
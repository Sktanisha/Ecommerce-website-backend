const userModel = require("../model/user.model");
const { asyncHandler } = require("../utils/asyncHandler");

exports.registrationController = asyncHandler(async(req, res)=>{

    //res.send(req.body);
   // let{name, email, password, phone} = req.body
   const {name, email, password, phone} = req.body;
   const user = new userModel({
    email,
    name,
    password,
    phone,
   });
   await user.save();
});

exports.loginController = (req, res)=>{
    res.send("login done ");
}

//module.exports = registrationController;
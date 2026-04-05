const { asyncHandler } = require("../utils/asyncHandler");

exports.registrationController = asyncHandler( (req, res)=>{

    res.send(req.body);
   // let{name, email, password, phone} = req.body
   //const {name, email, password, phone} = req.body

});

exports.loginController = (req, res)=>{
    res.send("login done ");
}

//module.exports = registrationController;
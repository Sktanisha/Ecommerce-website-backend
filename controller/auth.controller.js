exports.registrationController = (req, res)=>{
    let{name, email, password, phone} = req.body
    res.send(req.body);
}

exports.loginController = (req, res)=>{
    res.send("login done ");
}

//module.exports = registrationController;
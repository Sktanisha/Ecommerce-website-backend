const { apiResponse } = require("../utils/apiResponse");

exports.authorizeRole = (req, res,next)=>{
    //console.log(req.user);
    const {role} = req.user;
    if(role == "admin"){
        next();
    }else{
        apiResponse(res, 401, "Only admin can access this route");
    }
};
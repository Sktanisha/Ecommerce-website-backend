const { apiResponse } = require("./apiResponse")

exports.globalErrorHandler = (err, req, res, next )=>{
    if (err.name === "ValidationError"){
        let errors = {};
        Object.keys(err.errors).forEach((key)=>{
            errors[key] = err.errors[key].message;
        });

        apiResponse(res, 400, errors);
    } else{
        apiResponse(res, 400, err.message || "Something went wrong");
    }
    
}


//52:39 
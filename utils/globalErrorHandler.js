const { apiResponse } = require("./apiResponse")

exports.globalErrorHandler = (err, req, res, next )=>{
    if (err.name === "ValidationError"){
        let errors = {};
        Object.keys(err.errors).forEach((key)=>{
            errors[key] = err.errors[key].message;
        });

        Object.values(errors).forEach((value)=>{
            apiResponse(res, 400, value);
        });

        
    } else{
        apiResponse(res, 400, err.message || "Something went wrong");
    }
    
}



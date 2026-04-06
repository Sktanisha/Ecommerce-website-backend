const { apiResponse } = require("./apiResponse")

exports.globalErrorHandler = (err, req, res, next )=>{
    apiResponse(res, 500, "internal server error")
}
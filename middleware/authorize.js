var jwt = require('jsonwebtoken');
const { apiResponse } = require('../utils/apiResponse');
exports.authorize = (req, res, next)=>{
    
    const authorization = req.headers.authorization;
    if(req.headers && authorization.startsWith("Bearer")){
        const token = authorization.split(" ")[1];
        jwt.verify(token, process.env.PRIVATE_KEY, (err, decoded) =>{
            if(err){
                apiResponse(res, 500, err.message);
            }else{
                next();
            }
        });
    }else{
        apiResponse(res,500,  "invalid token type");
    }
    //var decoded = jwt.verify(token, process.env.PRIVATE_KEY);
    //res.send(decoded);
}
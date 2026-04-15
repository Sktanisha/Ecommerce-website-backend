const { apiResponse } = require("../utils/apiResponse");

exports.authorizeRole = (role) => {
    return (req, res, next) => {
        let accessrole = role.split(",");
        let access = accessrole.includes(req.user.role);
        
        if (access) {
            next();
        } else {
            apiResponse(res, 401, "access denied");
        }
    };
};
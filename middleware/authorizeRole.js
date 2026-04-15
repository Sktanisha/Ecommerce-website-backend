const { apiResponse } = require("../utils/apiResponse");

exports.authorizeRole = (...role) => {
    return (req, res, next) => {
        let access = role.includes(req.user.role);
        if (access) {
            next();
        } else {
            apiResponse(res, 401, "access denied");
        }
    };
};
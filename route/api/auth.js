const express = require("express");
const { registrationController, 
        loginController, 
        otpVerifyController, 
        resentOtpController, 
        forgetPasswordController , 
        resetPasswordController, 
        allUsersConroller} = require("../../controller/auth.controller");
const { authorize } = require("../../middleware/authorize");

const router = express.Router();

//http://localhost:8080/api/v1/auth/registration
router.post("/registration",registrationController);
router.post("/login", loginController);
router.post("/otp-verify", otpVerifyController);
router.post("/resent-otp",resentOtpController);
router.post("/forget-password",forgetPasswordController);
router.post("/reset-password",resetPasswordController);
router.get("/all-users",authorize,allUsersConroller );

module.exports = router;
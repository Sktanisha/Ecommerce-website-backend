const express = require("express");
const { registrationController, loginController, otpVerifyController, resentOtpController, forgetPasswordController } = require("../../controller/auth.controller");

const router = express.Router();
   
//http://localhost:8080/api/v1/auth/registration
router.post("/registration",registrationController);

router.post("/login", loginController);
router.post("/otp-verify", otpVerifyController);
router.post("/resent-otp",resentOtpController);
router.post("/forget-password",forgetPasswordController);

module.exports = router;
const express = require("express");
const { registrationController, loginController, otpVerifyController, resentOtpController } = require("../../controller/auth.controller");

const router = express.Router();
   
//http://localhost:8080/api/v1/auth/registration
router.post("/registration",registrationController);

router.post("/login", loginController);
router.post("/otp-verify", otpVerifyController)
router.post("/resent-otp",resentOtpController)

module.exports = router;
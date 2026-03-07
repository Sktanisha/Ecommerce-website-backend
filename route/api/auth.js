const express = require("express");
const { registrationController, loginController } = require("../../controller/auth.controller");

const router = express.Router();
   
//http://localhost:8080/api/v1/auth/registration
router.post("/registration",registrationController);

router.post("/login", loginController);


module.exports = router;
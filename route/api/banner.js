const express = require("express");
const { addBannerController } = require("../../controller/banner.controller");
const router = express.Router();
const multer  = require('multer')
//http://localhost:8080/api/v1/banner

router.post("/add-banner", addBannerController);


module.exports = router;
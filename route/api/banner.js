const express = require("express");
const { addBannerController } = require("../../controller/banner.controller");
const router = express.Router();
const upload = require("../../utils/upload");
const { authorize } = require("../../middleware/authorize");
const { authorizeRole } = require("../../middleware/authorizeRole");
//const multer  = require('multer')
//http://localhost:8080/api/v1/banner
//const upload = multer({ dest: 'uploads/' })
router.post("/add-banner", 
            authorize, 
            authorizeRole,
            upload.single("banner-image"), 
            addBannerController);


module.exports = router;
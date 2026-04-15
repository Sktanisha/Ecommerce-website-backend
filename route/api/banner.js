const express = require("express");
const { addBannerController, 
        deleteBannerController, 
        getAllBannersController, 
        updateBannersController, 
        singleBannerController
    } = require("../../controller/banner.controller");
const router = express.Router();
const upload = require("../../utils/upload");
const { authorize } = require("../../middleware/authorize");
const { authorizeRole } = require("../../middleware/authorizeRole");
//const multer  = require('multer')
//http://localhost:8080/api/v1/banner
//const upload = multer({ dest: 'uploads/' })
router.post(
            "/add-banner", 
            authorize, 
            authorizeRole("admin"),
            upload.single("banner-image"), 
            addBannerController
        );

router.delete(
            "/delete-banner/:id",
            authorize, 
            authorizeRole("admin"),
            deleteBannerController
 );

router.get("/banners", getAllBannersController);

router.patch(
    "/update-banner/:id", 
    authorize, 
    authorizeRole("admin"),
    upload.single("banner-image"), 
    updateBannersController
);

router.get(
            "/single-banner/:id",
            singleBannerController
        )
module.exports = router;
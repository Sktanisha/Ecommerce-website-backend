const express = require("express");
const { addCategoryController
    } = require("../../controller/category.controller");
const upload = require("../../utils/upload");
const { authorize } = require("../../middleware/authorize");
const { authorizeRole } = require("../../middleware/authorizeRole");
const router = express.Router();


router.post("/add-category",
            authorize,
            authorizeRole("admin"),
            upload.single("category-image"),
            addCategoryController
        );

module.exports = router;
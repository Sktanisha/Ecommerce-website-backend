const express = require("express");
const { addCategoryController,
    deleteCategoryController,
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
router.delete("/delete-category/:slug",
            authorize,
            authorizeRole("admin"),
            deleteCategoryController
        );

module.exports = router;
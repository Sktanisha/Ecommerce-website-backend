const express = require("express");
const { addSubCategoryController,
    

} = require("../../controller/subcategoryController");
const upload = require("../../utils/upload");
const { authorizeRole } = require("../../middleware/authorizeRole");
const { authorize } = require("../../middleware/authorize");
const router = express.Router();

router.post("/add-subcategory", 
            authorize,
            authorizeRole("admin"),
            upload.single("subcategory-image"), 
            addSubCategoryController);

module.exports = router;
const express = require("express");
const { addSubCategoryController, deleteSubCategoryController,

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
router.delete("/delete-subcategory/:id",
    authorize,
    authorizeRole("admin"),
    deleteSubCategoryController
)
module.exports = router;
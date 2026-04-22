const express = require("express");
const router = express.Router();


//http://localhost:8080/api/v1/auth
router.use("/auth", require("./auth"));
router.use("/banner", require("./banner"));
router.use("/category", require("./category"));
router.use("/subcategory", require("./subcategory"));

module.exports = router;
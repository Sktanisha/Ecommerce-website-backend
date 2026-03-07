const express = require("express");
const router = express.Router();

//http://localhost:8080/api/v1/
router.use(process.env.BASE_URL, require("./api"));
router.get("/getme",(req, res)=>{
    res.send("get me");
} );


module.exports = router;
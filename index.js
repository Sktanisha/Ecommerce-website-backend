const express = require("express");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;

//http://localhost:8080/
app.use("/", require("./route"));


app.listen(port, ()=>{
    console.log(`server is running on port ${port}`);
});
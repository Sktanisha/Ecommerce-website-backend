require("dotenv").config();
const express = require("express");
const { dbConfig } = require("./config/db");

const app = express();
const port = process.env.PORT || 5000;
//db connect
dbConfig();
//http://localhost:8080/
app.use("/", require("./route"));


app.listen(port, ()=>{
    console.log(`server is running on port ${port}`);
});
require("dotenv").config();
const express = require("express");
const { dbConfig } = require("./config/db");
const { globalErrorHandler } = require("./utils/globalErrorHandler");

const app = express();
const port = process.env.PORT || 5000;
app.use(express.json());
app.use(express.urlencoded({extended: true}));
//db connect
dbConfig();
//http://localhost:8080/
app.use("/", require("./route"));
app.use(globalErrorHandler);

//


app.listen(port, ()=>{
    console.log(`server is running on port ${port}`);
});
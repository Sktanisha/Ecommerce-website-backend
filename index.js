require("dotenv").config();
const express = require("express");
const { dbConfig } = require("./config/db");
const { globalErrorHandler } = require("./utils/globalErrorHandler");
//var session = require('express-session');
const app = express();
const port = process.env.PORT || 5000;
app.use(express.json());
app.use(express.urlencoded({extended: true}));

/* stateful
app.use(
    session({
        httpOnly: true,
        name:"tanishweb",
        secure: false,
        secret: process.env.PRIVATE_KEY,
        resave: false,
        saveUninitialized: false,
        cookie: {maxAge: 60000},
    }),
); */

//db connect
dbConfig();
//http://localhost:8080/
app.use("/", require("./route"));
app.use(globalErrorHandler);

//


app.listen(port, ()=>{
    console.log(`server is running on port ${port}`);
});
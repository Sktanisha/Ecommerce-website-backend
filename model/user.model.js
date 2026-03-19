const mongoose = require("mongoose");
const {Schema}= mongoose;

const userSchema = new Schema({
    name:{
        type: String,
        required: [true, "name is required"],
 
    },
    email: {
        type: String,
        required: [true, "email is required"],
        unique: [true, "email already in used "],

    },
    password: {
        type: String,
        required: [true, "password is required"],
        select: false,
        minLenth: [6, "Password must be 6 Characters"]
    },

})



//42 
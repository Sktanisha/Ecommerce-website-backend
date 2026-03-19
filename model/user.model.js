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

    }
})
const mongoose = require("mongoose");
const {Schema}= mongoose;

const userSchema = new Schema({
    name:{
        type: String,
        required: [true, "name is required"],
        trim: true,
    },
    email: {
        type: String,
        required: [true, "email is required"],
        unique: [true, "email already in used "],
        trim: true,
    },
    password: {
        type: String,
        required: [true, "password is required"],
        select: false,
        minLength: [6, "Password must be 6 Characters"]
    },
    phone:{
        type: String,
        unique: [true, "phone must be unique "],
        trim: true,

    },
    otp:{
        type: Number,

    },
    verify:{
        type: Boolean,
        default:false,
    },
    address:{
        type:String,

    }

})



//46
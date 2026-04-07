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
        minLength: [6, "Password must be at least 6 Characters"],
        //maxLength: [20, "Password must be at most 20 Characters"],
        
    },
    phone:{
        type: String,
        unique: [true, "phone must be unique "],
        trim: true,

    },
    otp:{
        type: String,

    },
    verified:{
        type: Boolean,
        default:false,
    },
    address:{
        type:String,
        trim: true,

    },
    role:{
        type:String,
        default: "user",
        enum:["user","admin"],
        trim: true,
    },

},
{
    versionKey: false,
    timestamps: true,
},
);

module.exports = mongoose.model("User", userSchema);
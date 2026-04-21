const { Schema, default: mongoose } = require("mongoose");

const categorySchema = new Schema({
    image: {
        type: String,
        required: [true, "image is required"],
    }, 
    name: {
        type: String,
        required: [true, "name is required"],
        unique: [true, "name must be unique"],
    },

},{
    timestamps:true,
    versionKey: false,
},
)

module.exports = mongoose.model("Category", categorySchema) ;
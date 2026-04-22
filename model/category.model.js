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
    slug: {
        type: String,
        required: [true, "slug is required"],
        unique: [true, "slug must be unique"],
    },
    isActive: {
        type: Boolean,
        default: true,
    },
    subcategory: [{
        type: mongoose.Types.ObjectId,
        ref: "Subcategory",
    },
    ],

}, {
    timestamps: true,
    versionKey: false,
},
)

module.exports = mongoose.model("Category", categorySchema);
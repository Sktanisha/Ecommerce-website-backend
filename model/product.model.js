const { Schema, default: mongoose } = require("mongoose");

const productSchema = new mongoose.Schema({

});

module.exports = mongoose.model("Product", productSchema);


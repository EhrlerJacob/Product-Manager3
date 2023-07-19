const mongoose = require("mongoose");
const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "All products must have a title."]
    },
    price: {
        type: Number,
    },
    description: {
        type: String,
    },

}, {timestamps: true});

module.exports = mongoose.model("Product", ProductSchema);
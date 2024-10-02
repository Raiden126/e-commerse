const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    parentCategory: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "categories",
    },
    name: {
        type: String,
        required: true,
        maxlength: 50,
    },
    level: {
        type: Number,
        required: true
    },
}, {timestamps: false});

const Category = mongoose.model("categories", categorySchema);
module.exports = Category;
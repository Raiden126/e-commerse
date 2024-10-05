const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    size: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    discountedPrice: {
        type: Number,
    },
    discountedPersent: {
        type: Number,
    },
    quantity: {
        type: Number,
        required: true
    },
    brand: {
        type: String,
    },
    color: {
        type: String,
    },
    size: [{
        name: {type: String},
        quantity: {type: Number}
    }],
    imageUrl: {
        type: String,
    },
    ratings: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "ratings",
    }],
    reviews: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "reviews",
    }],
    numRatings: {
        type: Number,
        default: 0
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "categories",
    },
}, {timestamps: true});

const Product = mongoose.model("products", productSchema);
module.exports = Product;
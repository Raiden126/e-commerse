const Rating = require("../models/rating.model");
const productService = require("../services/product.service");

async function createRating(reqData, user) {
    const product = await productService.findProductById(reqData.productId);

    const rating = new Rating({
        user: user._id,
        product: product._id,
        rating: reqData.rating,
    })

    return await rating.save();
}

async function getAllRating(productId) {
    const product = await productService.findProductById(reqData.productId);

    return await Rating.find({product: productId});
}

module.exports = {
    createRating,
    getAllRating
}
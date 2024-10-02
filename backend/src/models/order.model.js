const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    orderItems: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "orderItems",
    },
    shippingAddress: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "addresses",
    },
    orderDate: {
        type: Date,
        required: true,
        default: Date.now()
    },
    deliveryDate: {
        type: Date,
    },
    paymentDetails: {
        paymentMethod: {
            type: String,
        },
        transactionId: {
            type: String,
        },
        paymentId: {
            type: String,
        },
        paymentStatus: {
            type: String,
            default: "PENDING"
        }
    },
    totalPrice: {
        type: Number,
        required: true
    },
    totalDiscountedPrice: {
        type: Number,
        required: true
    },
    discounts: {
        type: Number,
        required: true
    },
    orderStatus: {
        type: String,
        required: true,
        default: "PENDING"
    },
    totalItem: {
        type: Number,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        // required: true
    },
}, {timestamps: true});

const Order = mongoose.model("orders", orderSchema);
module.exports = Order;
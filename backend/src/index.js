const express = require('express');
const cors = require('cors');
const authRouters = require('./routes/auth.route');
const userRouters = require('./routes/user.route');
const productRouter = require('./routes/product.routes');
const adminProductRouter = require('./routes/adminProduct.routes');
const cartRouter = require('./routes/cart.routes');
const cartItemRouter = require('./routes/cartItem.routes');
const orderRouter = require('./routes/order.route');
const reviewRouter = require('./routes/review.route');
const ratingRouter = require('./routes/rating.route');
const adminOrderRouter = require('./routes/admin.route');

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    return res.status(200).send({message: "welcome to ecommerce api", status: true})
})

app.use('/auth', authRouters);
app.use('/api/users', userRouters);
app.use('/api/products', productRouter);
app.use('/api/admin/products', adminProductRouter);
app.use('/api/cart', cartRouter);
app.use('/api/cart_items', cartItemRouter);
app.use('/api/orders', orderRouter);
app.use('/api/reviews', reviewRouter);
app.use('/api/ratings', ratingRouter);
app.use('/api/admin/orders', adminOrderRouter);

module.exports = app;
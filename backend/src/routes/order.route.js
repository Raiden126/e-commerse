const express = require("express");
const orderController = require('../controllers/order.controller');
const authenticate = require('../middleware/auth.middleware')

const router = express.Router();

router.post('/', authenticate, orderController.createOrder);
router.get('/user',authenticate, orderController.orderHistory);
router.put('/:id',authenticate, orderController.findOrderById);

module.exports = router;

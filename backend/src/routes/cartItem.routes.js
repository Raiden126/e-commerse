const express = require("express");
const cartItemController = require('../controllers/cartItem.controller');
const authenticate = require('../middleware/auth.middleware')

const router = express.Router();

router.put('/:id',authenticate, cartItemController.updateCartItem);
router.delete('/:id',authenticate, cartItemController.removeCartItem);

module.exports = router;

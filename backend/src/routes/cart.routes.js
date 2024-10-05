const express = require("express");
const cartController = require('../controllers/cart.controller');
const authenticate = require('../middleware/auth.middleware')

const router = express.Router();

router.get('/', authenticate, cartController.findUserCart);
router.put('/add',authenticate, cartController.addItemToCart);

module.exports = router;

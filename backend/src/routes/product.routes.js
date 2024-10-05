const express = require("express");
const productController = require('../controllers/product.controller');
const authenticate = require('../middleware/auth.middleware')

const router = express.Router();

router.get('/', authenticate, productController.getAllProducts);
router.get('/id/:id', authenticate, productController.findProductById);

module.exports = router;

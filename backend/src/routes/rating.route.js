const express = require("express");
const ratingController = require('../controllers/rating.controller');
const authenticate = require('../middleware/auth.middleware')

const router = express.Router();

router.post('/create', authenticate, ratingController.createRating);
router.get('/product/:productId', authenticate, ratingController.getAllRating);

module.exports = router;

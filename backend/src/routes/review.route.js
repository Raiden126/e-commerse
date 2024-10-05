const express = require("express");
const reviewController = require('../controllers/review.controller');
const authenticate = require('../middleware/auth.middleware')

const router = express.Router();

router.post('/create', authenticate, reviewController.createReview);
router.get('/product/:productId', authenticate, reviewController.getAllReviews);

module.exports = router;

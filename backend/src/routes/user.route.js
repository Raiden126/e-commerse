const express = require("express");
const userController = require('../controllers/user.controller');

const router = express.Router();

router.post('/profile', userController.getUserProfile);
router.post('/', userController.getAllUsers);

module.exports = router;
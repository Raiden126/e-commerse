const express = require("express");
const adminOrderController = require('../controllers/adminOrder.controller');
const authenticate = require('../middleware/auth.middleware')

const router = express.Router();

router.get('/', authenticate, adminOrderController.getAllOrders);
router.put('/:orderId/confirmed',authenticate, adminOrderController.confirmOrder);
router.put('/:orderId/delete',authenticate, adminOrderController.deleteOrder);
router.put('/:orderId/ship',authenticate, adminOrderController.shipOrder);
router.put('/:orderId/deliver',authenticate, adminOrderController.deliverOrder);
router.put('/:orderId/cancel',authenticate, adminOrderController.cancelOrder);

module.exports = router;

const express = require('express')
const router = express.Router()
const verifyToken = require("../middlewares/authMiddleware")
const verifyRole = require("../middlewares/roleMiddleware")

const {
    placeOrder,
    getMyOrders,
    getSingleOrder,
    cancelOrder,
    getAllOrders,
    updateOrderStatusAdmin
} = require("../controllers/checkoutController")

router.post("/placeOrder",verifyToken, verifyRole('user'), placeOrder)

router.get("/getMyOrders",verifyToken, verifyRole('user'),getMyOrders)

router.get('/getSingleOrder/:id', verifyToken, verifyRole('user','admin'),getSingleOrder)

router.patch('/cancelOrder/:id', verifyToken, verifyRole('user'), cancelOrder)

router.get('/getAllOrders', verifyToken, verifyRole('admin'), getAllOrders)

router.patch('/updateOrderStatus/:id', verifyToken, verifyRole('admin'),updateOrderStatusAdmin)

module.exports = router;
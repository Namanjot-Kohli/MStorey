const express = require("express");
const router = express.Router();
const verifyToken = require("../middlewares/authMiddleware");
const verifyRole = require("../middlewares/roleMiddleware");
const {
  addToCart,
  removeFromCart,
  updateQuantity,
  getCart,
  clearCart,
} = require("../controllers/cartController");

router.post("/addToCart", verifyToken, verifyRole("user", "admin"), addToCart);

router.delete("/removeFromCart",verifyToken, verifyRole("user", "admin"), removeFromCart);

router.put("/updateQuantity",verifyToken, verifyRole("user", "admin"),updateQuantity);

router.get('/getCart',verifyToken, verifyRole("user", "admin"),getCart);

router.delete("/clearCart",verifyToken, verifyRole("user", "admin"),clearCart);


module.exports = router;

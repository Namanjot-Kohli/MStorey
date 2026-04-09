const express = require("express")
const router = express.Router();
const verifyUser = require("../middlewares/authMiddleware")
const verifyRole = require("../middlewares/roleMiddleware")
const {createProduct, getAllProducts, getProductById, updateProduct, deleteProduct} = require("../controllers/productController")

router.post("/createProduct",verifyUser,verifyRole("seller", "admin"),createProduct)

router.get("/allProducts", getAllProducts)

router.get("/product/:id", getProductById)

router.put("/updateProduct/:id",verifyUser,verifyRole("admin","seller"), updateProduct)

router.delete("/deleteProduct/:id",verifyUser, verifyRole("seller","admin"), deleteProduct)

module.exports = router;
const express = require("express")
const router = express.Router();
const verifyToken = require("../middlewares/authMiddleware")
const verifyRole = require('../middlewares/roleMiddleware')

router.get("/admin", verifyToken, verifyRole("admin") , (req,res)=>{
    res.send("Hello ADMIN")
})

router.get("/seller", verifyToken,verifyRole("admin","seller"), (req,res)=>{
    res.send("Hello SELLER")
})

router.get("/user", verifyToken,verifyRole("admin","user","seller"), (req,res)=>{
    res.send("Hello USER")
})



module.exports = router;
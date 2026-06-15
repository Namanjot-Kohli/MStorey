const express = require('express');
const app = express();
require('dotenv').config();

const connectDB = require('./config/db_connection')
connectDB();

const authRoute = require("./routes/authRoute")
const userRoute = require("./routes/userRoute")
const productRoute = require("./routes/productRoute")
const cartRoute = require("./routes/cartRoute")
const checkoutRoute = require("./routes/checkoutRoute")

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/api/auth", authRoute )
app.use("/api", userRoute)
app.use("/api", productRoute)
app.use("/api/cart", cartRoute)
app.use('/api/checkout', checkoutRoute)

app.get("/",(req,res)=>{
    res.send("MStory");
})

app.listen(process.env.PORT,()=>console.log("MStory Server Started"));
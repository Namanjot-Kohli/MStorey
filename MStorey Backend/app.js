const express = require('express');
const app = express();
require('dotenv').config();

const connectDB = require('./config/db_connection')
connectDB();

const authRoute = require("./routes/authRoute")
const userRoute = require("./routes/userRoute")
const productRoute = require("./routes/productRoute")

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/api/auth", authRoute )
app.use("/api", userRoute)
app.use("/api", productRoute)

app.get("/",(req,res)=>{
    res.send("MStory");
})

app.listen(process.env.PORT,()=>console.log("MStory Server Started"));
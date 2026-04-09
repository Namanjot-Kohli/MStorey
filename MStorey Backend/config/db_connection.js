const mongoose = require("mongoose");

const connectDB = async () =>{
    try{
    mongoose.connect(`${process.env.MONGODB_URI}/MStory`);
    console.log("Connected DB");
    }catch(err){
    console.log(err.message);
    }
}

module.exports = connectDB
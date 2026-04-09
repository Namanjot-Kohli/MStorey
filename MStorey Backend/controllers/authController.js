const User = require("..//models/userModel");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

const registerUser = async(req,res)=>{
    try{
        const {name,email,password,role} = req.body;

        if(!name ||!email  ||!password){
            return res.status(400).send("ALL FEILDS ARE NEEDED TO BE FILLED")
        }
        if(await User.findOne({email})){
            return res.status(409).send("USER ALREADY EXISTS")
        }

        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt)

        await User.create({
            name,
            email,
            password: hash,
            role
        })
        res.status(200).send("User Registered Successfully")
    }catch(err){
        res.status(500).json({message: err.message})
    }
}

const loginUser = async(req,res)=>{
    try{
        const {email, password} = req.body;
        const user = await User.findOne({email});
        if (!user){
            return res.status(404).send(`No User with Email ${email} found, Register First`);
        }
        const isMatch = await bcrypt.compare(password,user.password)
        if (!isMatch){
            return res.status(400).send("Invalid Credentials!");
        }
        const token = jwt.sign(
            {id: user._id,role: user.role},
            process.env.JWT_SECRET , 
            {expiresIn:"1d"}
        )
        res.status(200).send(`login successful ${token}`)
    }catch(err){
        res.json({message: err.message})
    }
}

module.exports = {registerUser , loginUser};
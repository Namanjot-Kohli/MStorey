const jwt = require("jsonwebtoken")

const verifyRole = (...allowedRoles) =>{
    return (req,res,next)=>{
        if (!allowedRoles.includes(req.user.role)){
            return res.status(403).json({msg: "Access Denied bruh"})
        }
        next();
    }
}

module.exports = verifyRole

//complete learning about this and complete create jwt notes also incl authMiddleware :)
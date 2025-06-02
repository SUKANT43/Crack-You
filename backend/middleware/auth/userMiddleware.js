const jwt=require('jsonwebtoken');
const user = require('../../model/auth/userModel');

const protect=async(req,res,next)=>{
    const authHeader=req.headers['authorization'];
    const accessToken=authHeader && authHeader.startsWith('Bearer') ? authorization.split(' ')[1] : null;
}

module.exports={protect};
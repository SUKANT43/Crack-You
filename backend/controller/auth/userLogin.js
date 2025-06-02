const user=require('../../model/auth/userModel');
const jwt=require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');
const login=asyncHandler(async(req,res)=>{
    try{    
        const{email,password}=req.body;

    if(!email || !password){
        return res.status(400).json({message:"Please fill all the fields"});
    }

    const existingUser=await user.findOne({email});
    if(!existingUser){
        return res.status(400).json({message:"User does not exist"});
    }
    const isPasswordValid=await bcrypt.compare(password,existingUser.password);
    if(!isPasswordValid){
        return res.status(400).json({message:"Invalid credentials"});
    }

    const accessToken=jwt.sign(
        {id:user._id, email:user.email},
        process.env.ACCESS_TOKEN_SECRET,
        {expiresIn:'15m'}
    );

    const refreshToken=jwt.sign(    
        {id:user._id, email:user.email},
        process.env.REFRESH_TOKEN_SECRET,
        {expiresIn:'7d'}
    );
    existingUser.refreshToken=refreshToken;
    await existingUser.save();
    return res.cookie('refreshToken',refreshToken,{
        httpOnly:true,
        secure:true,
        sameSite:'strict',
        maxAge:7*24*60*60*1000 
    }).json({accessToken});

}
catch(err){
    console.error(err);
    return res.status(500).json({message:"Internal Server Error"});
    }
});


const logout =asyncHandler(async (req, res) => {
  try {
      const token = req.cookies.refreshToken;
  if (!token) return res.sendStatus(204); 

    const existingUser = await user.findOne({ refreshToken: token });
    if (existingUser) {
      existingUser.refreshToken = null;
      await existingUser.save();
    }
    return res.clearCookie('refreshToken', 
        { httpOnly: true,
          sameSite: 'Strict',
          secure: true 
        }).sendStatus(204);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});


module.exports={login, logout};


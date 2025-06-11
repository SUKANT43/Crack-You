const express=require('express');
const router=express.Router();
const{userRegisterOtp}=require('../../controller/user/userRegisterController')

router.post('/otp',userRegisterOtp);


module.exports=router;
const express=require('express');
const otp=require('../../config/mail');
const userModel=require('../../models/user/userModel');
const otpModel=require('../../models/user/userOtpModel')

const userRegisterOtp=async(req,res)=>{

    try{
        const {email}=req.body;

        if(!email){
            return res.status(400).json({msg:'Enter all fields'});
        }

        const findUser= await userModel.aggregate([
            {$match:{email:email}}
        ]);

        if(findUser.length>0){
            return res.status(409).json({msg:"user already exist"});
        }

        const findOtp=await otpModel.aggregate([
            {$match:{email:email},}
        ]);

        if(findOtp.length>0){
            return res.status(409).json({msg:"Try after 10 minutes"});
        }

        const otpCode= Math.floor(100000 + Math.random()*900000);
        
        await otpModel.create({
            email:email,
            otp:otpCode
        });


        try {
            await otp.sendMail({
                from: process.env.EMAIL,
                to: email,
                subject: 'Your OTP code regarding register Crack You',
                html: `<p>Your OTP code is: <b>${otpCode}</b></p><p>This OTP will expire in 10 minutes.</p>`
            });
        } catch (err) {
            await otpModel.findOneAndDelete({email:email});
            console.error("Failed to send mail:", err.message);
            return res.status(500).json({ msg: "Failed to send email" });
        }


        
        return res.status(201).json({msg:'otp sent to your mail'});

    }
    
    catch(e){
        console.log(e.message);
        return res.status(500).json({msg:"Internal server error"});
    }

}

module.exports={userRegisterOtp};
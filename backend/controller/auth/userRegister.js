const user=require('../../model/auth/userModel');
const otp=require('../../model/auth/userOtps')
const transporter=require('../../config/email');

const createOtp=async(req,res)=>{
    const {email} = req.body;
    if(!email || typeof email !== 'string'){
        return res.status(400).json({message: 'Invalid email format'});
    }
    try{
        const existingUser = await user.findOne({email: email});
        if(existingUser){
            return res.status(400).json({message: 'User already exists'});
        }
        const existingOtp = await otp.findOne({email: email, createUser: true});
        if(existingOtp){
            return res.status(400).json({message: 'OTP already sent try again 10 minutes later'});
        }
        const otpCode = Math.floor(100000 + Math.random() * 900000).toString();
        const newOtp = new otp({
            email: email,
            otp: otpCode,
            createUser: true
        });
            const mailOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: 'Trade-Hub - OTP for User Registration',
            text: `Your OTP for user registration is ${otpCode}. It is valid for 10 minutes.`
        };
        await transporter.sendMail(mailOptions);

        await newOtp.save();
        console.log(`OTP sent to ${email}: ${otpCode}`);
        return res.status(200).json({message: 'OTP sent successfully'});
    }
    catch(err){
        console.error(err);
        res.status(500).json({message: 'Internal Server Error'});
    }
}

module.exports = {createOtp};
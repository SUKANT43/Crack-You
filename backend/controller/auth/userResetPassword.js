const userOtp = require('../../model/auth/userOtpModel');
const user = require('../../model/auth/userModel');
const opt = require('../../config/email'); 
const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');
const resetPasswordOtp = asyncHandler(async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ message: "Please provide an email" });
    }

    const existingUser = await user.findOne({ email });
    if (!existingUser) {
      return res.status(400).json({ message: "User does not exist" });
    }

    const existingOtp = await userOtp.find({ email, resetPassword: true });
    if (existingOtp.length > 0) {
        return res.status(400).json({ message: "OTP already sent. Please wait for 10 minutes before requesting a new one." });
    }


    const otpCode = Math.floor(100000 + Math.random() * 900000);
    await userOtp.create({
      email: email,
      otp: otpCode,
      resetPassword: true,
    });

    await opt.sendMail({ 
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Password Reset OTP',
      text: `Your OTP for password reset is ${otpCode}`
    });

    return res.status(200).json({ message: "OTP sent to email" });

  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
});


const verifyOtpAndResetPassword =asyncHandler(async (req, res) => {
  try {
    const { email, otp, newPassword } = req.body;

    if (!email || !otp || !newPassword) {
      return res.status(400).json({ message: "Email, OTP, and new password are required." });
    }

    const existingOtp = await userOtp.findOne({ email, otp: Number(otp), resetPassword: true });
    if (!existingOtp) {
      return res.status(400).json({ message: "Invalid OTP" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newPassword, salt);

    const existingUser = await user.findOne({ email });
    if (!existingUser) {
      return res.status(404).json({ message: "User not found" });
    }

    existingUser.password = hashedPassword;
    await existingUser.save();

    await userOtp.deleteMany({ email, resetPassword: true });
    await opt.sendMail({ 
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Password Reset Successful',
      text: 'Your password has been reset successfully.'
    });
    return res.status(200).json({ message: "Password has been reset successfully." });

  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = {
  resetPasswordOtp,
  verifyOtpAndResetPassword
};
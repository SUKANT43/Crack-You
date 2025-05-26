const User = require('../../model/auth/userModel');
const UserOtp = require('../../model/auth/userOtpModel');
const transporter = require('../../config/email');
const bcrypt = require('bcryptjs');

const createOtp = async (req, res) => {
    const { email } = req.body;
    if (!email || typeof email !== 'string') {
        return res.status(400).json({ message: 'Invalid email format' });
    }
    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const recentOtp = await UserOtp.findOne({
            email,
            createUser: true,
            createdAt: { $gt: new Date(Date.now() - 10 * 60 * 1000) }
        });

        if (recentOtp) {
            const now = Date.now();
            const created = new Date(recentOtp.createdAt).getTime();
            const timeLeft = Math.ceil((10 * 60 * 1000 - (now - created)) / 1000); 

            return res.status(400).json({ timeLeft });
        }

        const otpCode = Math.floor(100000 + Math.random() * 900000).toString();

        const newOtp = new UserOtp({
            email,
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

        return res.status(200).json({ message: 'OTP sent successfully' });

    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};

const mailRegisterOtp = async (req, res) => {
    try {
        const { email, otpCode, password, name } = req.body;

        if (!email) {
            return res.status(400).json({ message: 'Email is required' });
        }

        if (!otpCode) {
            return res.status(400).json({ message: 'OTP code is required' });
        }

        if (!password || password.length < 6) {
            return res.status(400).json({ message: 'Password must be at least 6 characters long' });
        }

        if (!name || typeof name !== 'string') {
            return res.status(400).json({ message: 'Name is required' });
        }

        const existingOtp = await UserOtp.findOne({
            email,
            otp: otpCode,
            createUser: true,
            createdAt: { $gt: new Date(Date.now() - 10 * 60 * 1000) }
        });

        if (!existingOtp) {
            return res.status(400).json({ message: 'Invalid or expired OTP code' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            email,
            password: hashedPassword,
            name
        });

        await newUser.save();

        await UserOtp.deleteOne({ _id: existingOtp._id });

        return res.status(201).json({ message: 'User registered successfully' });

    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
};

module.exports = { createOtp, mailRegisterOtp };

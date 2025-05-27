const express = require('express');
const router = express.Router();
const { createOtp,mailRegisterOtp } = require('../../controller/auth/userRegister');
const {login, logout}=require('../../controller/auth/userLogin');
router.post('/create-otp', createOtp);
router.post('/mail-register-otp', mailRegisterOtp);
router.post('/login',login);
router.post('/logout', logout);
module.exports= router;
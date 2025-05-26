const express = require('express');
const router = express.Router();
const { createOtp,mailRegisterOtp } = require('../../controller/auth/userRegister');

router.post('/create-otp', createOtp);
router.post('/mail-register-otp', mailRegisterOtp);
module.exports= router;
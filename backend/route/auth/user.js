const express = require('express');
const router = express.Router();
const { createOtp } = require('../../controller/auth/userRegister');

router.post('/create-otp', createOtp);
module.exports= router;
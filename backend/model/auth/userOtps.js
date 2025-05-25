const mongoose=require('mongoose');

const resetOrCreateOtpSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    otp: {
        type: String,
        required: true
    },
    resetPassword:{
        type: Boolean,
        default: false
    },
    createUser: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expires: '10m' 
    }
});

module.exports = mongoose.model('UserOtp', resetOrCreateOtpSchema);
const mongoose = require('mongoose');

const userOtpSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    otp: {
        type: String,
        required: true
    },
    resetPassword: {
        type: Boolean,
        default: false
    },
    createUser: {
        type: Boolean,
        default: false
    },
}, {
    timestamps: true
});

userOtpSchema.index({ createdAt: 1 }, { expireAfterSeconds: 600 }); //-1 is descending order, 1 is ascending order

module.exports = mongoose.model('UserOtp', userOtpSchema);

const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    fingerprintPath: { type: String, required: true },
    balance: { type: Number, default: 0 },
    
});

const User = mongoose.model('User', UserSchema);
module.exports = User;

const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'please add name'],
        trim: true 
    },
    email: {
        type: String,
        required: [true,'please add email'],
        trim: true 
    },
    password: {
        type: String,
        required:[true,'please add password'],
        min: 6,
        max: 64,
    },
    role: {
        type: String,
        default: 'User',
    },
}, 
    {timestamps:true}

);

module.exports = mongoose.model('User', userSchema);
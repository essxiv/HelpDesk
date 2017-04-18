const mongoose = require('mongoose')

const Admin = mongoose.Schema({
    date: {
        type: Date,
        default: Date.now
    },
    id: {
        type: String,
        unique: true,
        index: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true,
    },
    passwordConfirmation: {
        type: String,
        required: true
    },
    permissions: {
        type: Boolean,
        default: true
    }
})

module.exports = mongoose.model('Admin', Admin)

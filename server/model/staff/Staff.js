const mongoose = require('mongoose')

const Staff = mongoose.Schema({
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
        length: 8
    },
    passwordConfirmation: {
        type: String,
        required: true,
        length: 8
    },
    permissions: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model('Staff', Staff)

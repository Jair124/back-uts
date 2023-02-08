const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        require: true,
        min : 6,
        max: 255
    },
    lastname: {
        type: String,
        require: true,
        max: 255
    },
    email: {
        type: String,
        require: true,
        max: 1245,
    },
    password: {
        type: String,
        require: true,
        minlength: 6
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('User', userSchema)
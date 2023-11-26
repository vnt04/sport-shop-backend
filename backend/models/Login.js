const mongoose = require('mongoose')


const Login = new mongoose.Schema(
    {
        email: String,
        password: String,
    }
)

module.exports = mongoose.model('Login',Login);
const mongoose = require("mongoose");

const Unit = new mongoose.Schema(
    {
        maDVT: String,
        tenDVT: String,
    }
)

module.exports = mongoose.model('Unit',Unit);
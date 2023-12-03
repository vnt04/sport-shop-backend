const mongoose = require('mongoose')


const Product = new mongoose.Schema(
    {
        maSP: String,
        tenSP: String,
        gia:Number,
        slKho: Number,
        maDVT: String,
        maLoai: String,
        state: String,
    }
)

module.exports = mongoose.model('Product',Product);
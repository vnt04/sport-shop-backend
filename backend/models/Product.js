const mongoose = require('mongoose')


const Product = new mongoose.Schema(
    {
        maSP: String,
        tenSP: String,
        gia:Number,
        slKho: Number,
        dvt: String,
        maLoai: String,
    }
)

module.exports = mongoose.model('Product',Product);
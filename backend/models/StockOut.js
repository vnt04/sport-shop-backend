const mongoose = require('mongoose')


const StockOut = new mongoose.Schema(
    {
        user: String,
        ngayXuat: String,
        tenNcc: String,
        loaiSP: String,
        tenSP: String,
        gia: Number,
        soLuong: Number,
        state: String,
    }
)

module.exports = mongoose.model('StockOut',StockOut);
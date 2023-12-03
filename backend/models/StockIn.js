const mongoose = require('mongoose')


const StockIn = new mongoose.Schema(
    {
        user: String,
        ngayNhap: String,
        tenNcc: String,
        loaiSP: String,
        tenSP: String,
        giaNhap: Number,
        soLuong: Number,
        dvt: String,
        chietKhau: String,
        state: String,
    }
)

module.exports = mongoose.model('StockIn',StockIn);
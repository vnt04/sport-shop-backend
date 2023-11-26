const mongoose = require('mongoose')


const StockIn = new mongoose.Schema(
    {
        maPhieu: {
        type: String,
        unique: true, // Đảm bảo maPhieu là duy nhất
        },
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
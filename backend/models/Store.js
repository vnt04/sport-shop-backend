const mongoose = require('mongoose')

const Store = new mongoose.Schema(
    {
        maSP: {type: String},
        tenSP: {type: String},
        maDVT: {type: String},
        maLoai: {type: String},
        state: {type: String},
        giaBan: {type: Number},
        soLuong: {type: Number},
    }
)

module.exports = mongoose.model('Store',Store);
const mongoose = require('mongoose')

const Order = new mongoose.Schema(
    {
        tenSP: {type: String},
        soLuong: {type: String},
        day: {type: String},
        tenKH: {type: String},
        contact: {type: String},
        tongTien: {type: String},
        state: {type: String},
    }
);

module.exports = mongoose.model('Order',Order);
const mongoose = require("mongoose");

const User = new mongoose.Schema(
    {
        tenNv: { type: String, default: 'Trần Văn Nghiệp' },
        chucVu: { type: String, default: 'Admin' },
        sex: { type: String, default: 'Nam' },
        sdt: { type: String, default: '0981253214' },
        mail: { type: String, default: 'tranvannn04@gmail.com' },
        address: { type: String, default: 'Nghĩa An, TP Quảng Ngãi' },
        day: { type: String, default: '03/05/2002' },
        maThue: { type: String, default: '120902' },
        luongCoBan: { type: Number, default: 6000000 },
        hsLuong: { type: Number, default: 2 },
        phuCap: { type: Number, default: 500000 },
        luongThang: { type: Number, default: 0 },
    },

);


module.exports = mongoose.model('User',User);
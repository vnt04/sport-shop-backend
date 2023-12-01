const mongoose = require("mongoose");

const Supplier = new mongoose.Schema(
    {
        tenNcc: { type: String, default: 'Trần Văn N' },
        manager: { type: String, default: 'Trần Văn N' },
        maThue: { type: String, default: '012345' },
        sdt: { type: String, default: '0981253214' },
        mail: { type: String, default: 'tranvannn04@gmail.com' },
        address: { type: String, default: '72 Lê Trung Đình, TP Quảng Ngãi' },

    }
);


module.exports = mongoose.model('Supplier',Supplier);
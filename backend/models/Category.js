const mongoose = require('mongoose')


const Category = new mongoose.Schema(
    {
        maLoai: {type: String, default:"gym"},
        tenLoai: {type:String, default: "Dụng cụ tập gym"}
    }
);

module.exports = mongoose.model('Category',Category);
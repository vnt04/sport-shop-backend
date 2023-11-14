const mongoose = require("mongoose");


const Receipt = new mongoose.Schema(
    {
        code: String,
        source: String,
        day: String,
        creator: String,
        state: String,
        act: String,
    }
)


module.exports = mongoose.model('Receipt',Receipt);
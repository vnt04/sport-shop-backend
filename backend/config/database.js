const mongoose = require('mongoose');

async function connectDatabase () {
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/sport_shop');
        console.log("Connect successfully !!!");
    }
    catch(error)
    {
        console.log(error);
        console.log("Connect Fail !!!");
    }
}

module.exports = connectDatabase;
const StockIn = require('../models/StockIn')

class StockInController{
    index(req,res){
        res.send('Nhập kho');
    }

    async add(req,res){
        try{
            const formData = req.body;
            const newData = new StockIn(formData);
            await newData.save();
        }
        catch(error){
            console.error('Error saving data to MongoDB:', error);
        }
    }

    read(req,res,next){
        StockIn.find({})
            .then(stockIn => res.json(stockIn))
            .then(error => next(error));
        
    }

}

module.exports = new StockInController();
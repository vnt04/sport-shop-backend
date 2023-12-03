const StockOut = require('../models/StockOut')

class StockOutController{


    read(req,res,next){
        StockOut.find({})
            .then(stockOut => res.json(stockOut))
            .then(error => next(error));
        
    }


}

module.exports = new StockOutController();
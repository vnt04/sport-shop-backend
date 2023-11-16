const Receipt = require('../models/Receipt');

class ReceiptController{
     receipt(req,res,next){
        Receipt.find({})
        .then(receipts => res.json(receipts))
        .catch(error => next(error));
    }
    add(req,res){
        res.send('add receipt here!')
    }
    store(req,res){
        res.send('tesst');
    }
}


module.exports = new ReceiptController();
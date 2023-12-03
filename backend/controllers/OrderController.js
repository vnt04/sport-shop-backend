const Order = require('../models/Order')

class OrderController{

    read(req,res,next){
        Order.find({})
            .then (order => res.json(order))
            .catch(error => next(error))
    }

}

module.exports = new OrderController();
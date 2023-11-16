const Unit = require('../models/Unit')

class UnitController{
    index(req,res){
        res.send('unit');

    }

    read(req,res,next){
        Unit.find({})
        .then(unit => res.json(unit))
        .then(error => next(error))
    }
}

module.exports = new UnitController();
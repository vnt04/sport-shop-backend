const Product = require('../models/Product')


class ProductController{
    index(req,res){
        res.send('product');
    }

    read(req,res,next){
        Product.find({})
        .then(product => res.json(product))
        .then(error => next(error))
    }
}

module.exports = new ProductController();
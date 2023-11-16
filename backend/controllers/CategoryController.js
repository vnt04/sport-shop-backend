const Category = require('../models/Category')

class CategoryController{
    index(req,res){
        res.send('Category');
    }

    read(req,res,next){
        Category.find({})
        .then(cate => res.json(cate))
        .catch(error => next(error));
    }
}

module.exports = new CategoryController();
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
    async add (req, res) {
        try {
            const newProductData = req.body;
            const existingProduct = await Product.findOne({
                tenSP: newProductData.tenSP,
                gia: newProductData.gia
            });
            if (existingProduct){
                existingProduct.slKho += newProductData.slKho;
                const updatedProduct = await existingProduct.save();
                res.status(200).json(updatedProduct);
            }
            else{
                const newProduct = new Product(newProductData);
                const savedProduct = await newProduct.save();
                res.status(201).json(savedProduct);
            }
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    };
}

module.exports = new ProductController();
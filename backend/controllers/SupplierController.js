const Supplier = require('../models/Supplier');

class SupplierController{

    index(req,res){
        res.send('supplier page');
    }


    async add(req, res) {
     try {
            const formData = req.body;
            const newSupplier = new Supplier(formData);

            await newSupplier.save();
            res.json({ message: 'Supplier added successfully' });
        } 
            catch (error) {
            console.error('Error saving data to MongoDB:', error);
            res.status(500).json({ error: 'Failed to save data to MongoDB' });
        }
    }

     read(req,res,next){
        Supplier.find({})
        .then(supplier => res.json(supplier))
        .catch(error => next(error));
    }
}

module.exports = new SupplierController();
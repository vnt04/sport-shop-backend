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

    async delete(req, res, next) {
    try {
        const  id  = req.params.id; 
        const deletedSupplier = await Supplier.deleteOne({_id: id})

        if (!deletedSupplier) {
            return res.status(404).json({ error: 'Supplier not found' });
        }
        res.json({ message: 'Supplier deleted successfully' });
    } catch (error) {
        console.error('Error deleting data from MongoDB:', error);
        res.status(500).json({ error: 'Failed to delete data from MongoDB' });
    }
    }
    
    async update(req, res, next) {
        try {
            const  id  = req.params.id; 
            const updateData = req.body;
            const updatedSupplier = await Supplier.findOneAndUpdate(
                { _id: id },
                { $set: updateData },
                { new: true } 
            );

            if (!updatedSupplier) {
                return res.status(404).json({ error: 'Supplier not found' });
            }

            res.json({ message: 'Supplier updated successfully', updatedSupplier });
            } catch (error) {
                console.error('Error updating data in MongoDB:', error);
                res.status(500).json({ error: 'Failed to update data in MongoDB' });
            }
    }

}

module.exports = new SupplierController();
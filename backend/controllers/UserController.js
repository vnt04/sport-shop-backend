const User = require('../models/User');

class UserController{

    index(req,res){
        res.send('User page');
    }

    async delete(req, res, next) {
        try {
            const  id  = req.params.id; 
            const deletedUser = await User.deleteOne({_id: id})

            if (!deletedUser) {
                return res.status(404).json({ error: 'User not found' });
            }
            res.json({ message: 'User deleted successfully' });
        } catch (error) {
            console.error('Error deleting data from MongoDB:', error);
            res.status(500).json({ error: 'Failed to delete data from MongoDB' });
        }
    }
    async add(req, res) {
     try {
            const formData = req.body;
            const newUser = new User(formData);
            await newUser.save();
            res.json({ message: 'newUser added successfully' });
        } 
            catch (error) {
            console.error('Error saving data to MongoDB:', error);
            res.status(500).json({ error: 'Failed to save data to MongoDB' });
        }
    }
    async update(req, res, next) {
    try {
        const  id  = req.params.id; 
        const updateData = req.body;
        const updatedUser = await User.findOneAndUpdate(
            { _id: id },
            { $set: updateData },
            { new: true } 
        );

        if (!updatedUser) {
            return res.status(404).json({ error: 'User not found' });
        }

        res.json({ message: 'User updated successfully', updatedUser });
        } catch (error) {
            console.error('Error updating data in MongoDB:', error);
            res.status(500).json({ error: 'Failed to update data in MongoDB' });
        }
    }
     read(req,res,next){
        User.find({})
        .then(user => res.json(user))
        .catch(error => next(error));
    }
}

module.exports = new UserController();
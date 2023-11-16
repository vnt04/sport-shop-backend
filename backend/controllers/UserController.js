const User = require('../models/User');

class UserController{

    index(req,res){
        res.send('User page');
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

     read(req,res,next){
        User.find({})
        .then(user => res.json(user))
        .catch(error => next(error));
    }
}

module.exports = new UserController();
const Login = require('../models/Login')

class LoginController {
    index(req,res){
        res.send('login');
    }
    read(req,res,next){
        Login.find({})
        .then(account => res.json(account))
        .catch(error => next(error))
    }
}

module.exports = new LoginController();
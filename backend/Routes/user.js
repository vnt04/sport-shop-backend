const express = require('express');
const router = express.Router();

const userController = require('../controllers/UserController')

router.post('/add',userController.add);
router.get('/read',userController.read);
router.get('/',userController.index);

module.exports = router;
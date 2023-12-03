const express = require('express');
const router = express.Router();

const userController = require('../controllers/UserController')

router.post('/add',userController.add);
router.put('/update/:id',userController.update);
router.delete('/delete/:id', userController.delete);
router.get('/read',userController.read);
router.get('/',userController.index);

module.exports = router;
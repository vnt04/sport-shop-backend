const express = require('express')
const router = express.Router();

const storeController = require('../controllers/StoreController')

router.get('/read',storeController.read);
router.post('/add',storeController.add);
router.post('/update/:id',storeController.update);
router.delete('/delete/:id',storeController.delete);

module.exports = router;


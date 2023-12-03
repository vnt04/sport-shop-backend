const express = require('express');
const router = express.Router();

const stockInController = require('../controllers/StockInController')

router.put('/update/:id', stockInController.update);
router.get('/add',stockInController.add);
router.post('/add',stockInController.add);
router.get('/read',stockInController.read);
router.get('/',stockInController.index);

module.exports = router;
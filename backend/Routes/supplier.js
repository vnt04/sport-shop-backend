const express = require('express');
const router = express.Router();

const supplierController = require('../controllers/SupplierController')

router.post('/add',supplierController.add);
router.get('/read',supplierController.read);
router.get('/',supplierController.index);

module.exports = router;
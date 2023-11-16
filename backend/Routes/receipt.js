
const express = require('express');
const router = express.Router();

const receiptController = require('../controllers/ReceiptController');

router.post('/store',receiptController.store);
router.get('/store',receiptController.store);
router.get('/', receiptController.receipt); 

module.exports = router;

const express = require('express');
const router = express.Router();

const receiptController = require('../controllers/ReceiptController');

router.get('/:slug', receiptController.add); 
router.get('/', receiptController.receipt); 

module.exports = router;
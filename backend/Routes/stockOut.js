const express = require('express');
const router = express.Router();

const stockOutController = require('../controllers/StockOutController')

router.get('/read',stockOutController.read);

module.exports = router;
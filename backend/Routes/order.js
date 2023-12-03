const express = require('express')
const router = express.Router();

const orderController = require('../controllers/OrderController')
router.get('/read',orderController.read);

module.exports = router;
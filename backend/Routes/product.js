const express = require('express')
const router = express.Router();

const productController = require('../controllers/ProductController')

router.get('/read',productController.read);
router.get('/',productController.index);

module.exports = router;
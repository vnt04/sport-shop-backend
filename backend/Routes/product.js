const express = require('express')
const router = express.Router();

const productController = require('../controllers/ProductController')

router.post('/add',productController.add);
router.get('/read',productController.read);
router.get('/',productController.index);

module.exports = router;
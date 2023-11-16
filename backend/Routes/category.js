const express = require('express');
const router = express.Router();

const categoryController = require('../controllers/CategoryController')

router.get('/read',categoryController.read);
router.get('/',categoryController.index);

module.exports = router;
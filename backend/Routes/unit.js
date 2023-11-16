const express = require('express')
const router = express.Router();

const unitController = require('../controllers/UnitController')

router.get('/read',unitController.read);
router.get('/',unitController.index);

module.exports = router;
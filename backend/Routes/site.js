const express = require('express');
const router = express.Router();

const siteController = require('../controllers/siteController')
router.get('/', siteController.home);


module.exports = router;
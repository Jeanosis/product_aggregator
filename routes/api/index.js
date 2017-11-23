const express = require('express');
const router = express.Router();

const test = require('./test');
const product = require('./product');

router.use('/test', test);
router.use('/product', product);

module.exports = router;

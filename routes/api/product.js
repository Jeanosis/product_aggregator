const appRoot = require('app-root-path');
const express = require('express');
const router = express.Router();

let product = require(appRoot + '/controllers/api/product');

router.get('/:product_id', product.get);

module.exports = router;

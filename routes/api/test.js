const appRoot = require('app-root-path');
const express = require('express');
const router = express.Router();

let test = require(appRoot + '/controllers/api/test');

router.get('/', test.get);
router.post('/', test.post);
router.put('/', test.put);

module.exports = router;

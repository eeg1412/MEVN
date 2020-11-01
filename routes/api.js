var express = require('express');
var router = express.Router();

var apiReg = require('../api/register');

// post
router.post('/register', apiReg);

module.exports = router;

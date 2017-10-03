'use strict';

var math = require('../lib/math');
var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
	if (req.query.fibonum) {
		res.render('fibonacci', {
			title: 'Calculate Fibonacci Numbers',
			fibonum: req.query.fibonum,
			fiboval: math(req.query.fibonum)
		});
	} else res.render('fibonacci', { title: 'Calculate Fibonacci Numbers', fiboval: undefined });
});

module.exports = router;
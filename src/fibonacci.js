const math = require('../lib/math');
const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) =>{
	if(req.query.fibonum){
		res.render('fibonacci', {
			title: 'Calculate Fibonacci Numbers',
			fibonum: req.query.fibonum,
			fiboval: math(req.query.fibonum)
		});
	}
	else
		res.render('fibonacci', {title: 'Calculate Fibonacci Numbers', fiboval: undefined});
});

module.exports = router;
"use strict";

var fibonacci = function fibonacci(n) {
	var fibos = [];
	fibos[0] = 0;
	fibos[1] = 1;
	fibos[2] = 1;
	for (var i = 3; i <= n; i++) {
		fibos[i] = fibos[i - 1] + fibos[i - 2];
	}
	return fibos[n];
};

module.exports = fibonacci;
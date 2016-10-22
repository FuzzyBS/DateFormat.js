/*
	MathInt.js by Bruce Sedlacek @FuzzyBS
*/

Math.prototype.int = function (number) {
	'use strict';
	return (number / Math.abs(number)) * Math.floor(Math.abs(number));
};

'use strict';
const stylizeText = require('./other-text-styling');
const colorizeText = require('./colorize-text');
module.exports = function (originalText, colorName, otherOpts) {
	let resultingText = originalText;
	if (typeof otherOpts !== 'undefined' && otherOpts && otherOpts !== 'none') {
		resultingText = stylizeText(originalText, otherOpts);
	}

	resultingText = colorizeText(resultingText, colorName);

	return resultingText;
};

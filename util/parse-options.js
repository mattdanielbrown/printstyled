'use strict';
const stylizeText = require('./other-text-styling');
const colorizeText = require('./colorize-text');
module.exports = function (originalText, colorName, otherOptions) {
	let resultingText = originalText;
	if (typeof otherOptions !== 'undefined' && otherOptions && otherOptions !== 'none') {
		resultingText = stylizeText(originalText, otherOptions);
	}

	resultingText = colorizeText(resultingText, colorName);

	return resultingText;
};

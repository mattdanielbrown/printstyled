"use strict";
const colors = require('chalk');
const stylizeText = require('./other-text-styling');
const colorizeText = require('./colorize-text');
module.exports = (originalText, colorName, otherOpts) => {
	let resultingText = originalText;
	if (typeof otherOpts !== 'undefined' && otherOpts &&  otherOpts !== 'none') {
	//==========================================================================
	// Add Style
	//==========================================================================
		resultingText = stylizeText(originalText, otherOpts);
	}
	//==========================================================================
	// Color Only
	//==========================================================================
	resultingText = colorizeText(resultingText, colorName);

	return resultingText;
};

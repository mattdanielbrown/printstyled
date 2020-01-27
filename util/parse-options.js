"use strict";
const colors = require('chalk');
module.exports = (originalText, colorName, otherOpts = false) => {
	let resultingText = colors.red(originalText);
	switch (colorName) {
		case "black":
			resultingText = colors.black(originalText);
			break;
		case "blue":
			resultingText = colors.blue(originalText);
			break;
		case "cyan":
			resultingText = colors.cyan(originalText);
			break;
		case "green":
			resultingText = colors.green(originalText);
			break;
		case "orange":
			resultingText = colors.orange(originalText);
			break;
		case "purple":
			resultingText = colors.purple(originalText);
			break;
		case "red":
			resultingText = colors.red(originalText);
			break;
		case "yellow":
			resultingText = colors.yellow(originalText);
			break;
		case "gray":
			resultingText = colors.gray(originalText);
			break;
		case "white":
			resultingText = colors.white(originalText);
			break;
		default:
			resultingText = colors.white(originalText);
			break;
	}
	return resultingText;
};

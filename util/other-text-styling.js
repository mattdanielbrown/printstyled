'use strict';
const colors = require('chalk');
// const colorz = require("cli-color");
module.exports = (originalText, styleOpts) => {
	let resultingText = originalText;
	for (let i = 0; i < styleOpts.length; i++) {
		let styleOptionName = styleOpts[i];

		switch (styleOptionName) {
			case "bold":
				// resultingText = colors.bold(originalText);
				resultingText = colors.bold(resultingText);
				break;
			case "italic":
				resultingText = colors.italic(resultingText);
				break;
			case "underline":
				resultingText = colors.underline(resultingText);
				break;
			case "dim":
				resultingText = colors.dim(resultingText);
				break;
			case "rev":
				resultingText = colors.inverse(resultingText);
				break;
		}

	}
	return resultingText;
};

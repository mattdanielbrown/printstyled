'use strict';

const parseOptions = require('./util/parse-options');

module.exports = (input, colorName, otherOptions) => {
	const defaultColor = 'white';
	const defaultText = 'Testing';
	const defaultStyle = 'none';
	return parseOptions(
		input || defaultText,
		colorName || defaultColor,
		otherOptions || defaultStyle
	);
};

'use strict';

const parseOptions = require('./util/parse-options');

module.exports = (input, colorName) => {
	if (typeof input !== 'string') {
		throw new TypeError(`Expected a string, got ${typeof input}`);
	}

	return parseOptions(input, colorName, false);

	// return `${input} & ${postfix}`;
};

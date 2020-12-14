/* eslint-disable import-style */
'use strict';
import {dim, bold, inverse, italic, underline, normal} from 'chalk';

module.exports = function (originalText, styleOptions) {
	let resultingText = originalText;
	for (const otherOptions of styleOptions) {
		switch (otherOptions) {
			case 'bold':
				// Noinspection JSUnresolvedFunction
				resultingText = bold(resultingText);
				break;
			case 'italic':
				// Noinspection JSUnresolvedFunction
				resultingText = italic(resultingText);
				break;
			case 'underline':
				// Noinspection JSUnresolvedFunction
				resultingText = underline(resultingText);
				break;
			case 'dim':
				/* Noinspection JSUnresolvedFunction */
				resultingText = dim(resultingText);
				break;
			case 'rev':
				/* Noinspection JSUnresolvedFunction */
				resultingText = inverse(resultingText);
				break;
			default:
				resultingText = normal(resultingText);
				break;
		}
	}

	return resultingText;
};

'use strict';

const colors = require('chalk');
const yellowTitle = (titleText) => { return colors["yellow"].underline.dim(titleText); };
const exampleResult = (resultText) => { return colors["italic"].dim(resultText); };
const exampleCommand = (exampleText) => { return colors["white"](exampleText); };
const dollarSign = () => { return colors["green"].dim('$'); };
const commandOption = (optionText) => { return colors["cyan"].italic(optionText); };
module.exports = () => {
	return `
	${yellowTitle('Usage')}
	  ${dollarSign()} colortext [${commandOption('input')}]

	${yellowTitle('Options')}
	  --${commandOption('foo')}  Lorem ipsum [Default: false]

	${yellowTitle('Examples')}
	  ${dollarSign()}${exampleCommand('  colortext ')}
	     ${exampleResult("# ... unicorns & rainbows ")}

	  ${dollarSign()}${exampleCommand('  colortext ponies ')}
	     ${exampleResult("# ... ponies & rainbows ")}
`;
};

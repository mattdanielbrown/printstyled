'use strict';

const colors = require('chalk');
const mainTitle = (mainTitleText) => { return colors["green"].bold.inverse(mainTitleText); };
const yellowTitle = (titleText) => { return colors["yellow"].underline.dim(titleText); };
const exampleResult = (resultText) => { return colors["italic"].dim(resultText); };
const exampleCommand = (exampleText) => { return colors["white"](exampleText); };
const dollarSign = () => { return colors["green"].dim('$'); };
const commandOption = (optionText) => { return colors["cyan"].italic(optionText); };
module.exports = () => {
	return `${mainTitle("  colortext  ")}

	${yellowTitle('Usage')}
	  ${dollarSign()} colortext ${commandOption('TEXT')} [${commandOption('COLOR')}] [${commandOption('STYLE(S)...')}]

	${yellowTitle('Options')}
	  ${commandOption('[COLOR]')}  		color name 		[Default: white]
	  ${commandOption('[STYLE(S)]...')}	style name(s)	[Default: none / normal]
						${exampleResult(("Availble Style Values: 'bold', 'italic', 'underline', 'rev'"))}
	${yellowTitle('Examples')}
	  ${dollarSign()}${exampleCommand('  colortext "Testing" blue')}
			${colors.blue(" Testing")}

	  ${dollarSign()}${exampleCommand('  colortext "Testing 2" red bold')}
			${colors.red.bold(" Testing 2")}

	  ${dollarSign()}${exampleCommand('  colortext "Testing 3" green bold italic ')}
     	${colors.green.bold.italic(" Testing 3")}
`;
};

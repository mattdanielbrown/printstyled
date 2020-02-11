#!/usr/bin/env node

'use strict';

const meow = require('meow');
const helpMessage = require('./util/help-message-content');
const colortext = require('.');
const cli = meow(helpMessage());
const otherArgs = function (cliAllInputs) {
	if (cliAllInputs.length > 2) {
		return cli.input.slice(2);
	}

	return 'none';
};

console.log(colortext(cli.input[0], cli.input[1], otherArgs(cli.input)));

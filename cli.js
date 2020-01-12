#!/usr/bin/env node
'use strict';
const meow = require('meow');
const colortext = require('.');

const cli = meow(`
	Usage
	  $ colortext [input]

	Options
	  --foo  Lorem ipsum [Default: false]

	Examples
	  $ colortext
	  unicorns & rainbows
	  $ colortext ponies
	  ponies & rainbows
`);

console.log(colortext(cli.input[0] || 'unicorns'));

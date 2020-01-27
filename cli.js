#!/usr/bin/env node
'use strict';
const meow = require('meow');
const colortext = require('.');
const helpMessage = require('./util/help-message-content');
const cli = meow(helpMessage());

console.log(colortext(cli.input[0], cli.input[1]));

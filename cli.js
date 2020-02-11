#!/usr/bin/env node

'use strict'

const meow = require('meow')
const colortext = require('.')
const helpMessage = require('./util/help-message-content')
const cli = meow(helpMessage())
const otherArgs = function (cliAllInputs) {
  if (cliAllInputs.length > 2) {
    return cli.input.slice(2)
  } else {
    return 'none'
  }
}

console.log(colortext(cli.input[0], cli.input[1], otherArgs(cli.input)))

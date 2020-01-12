# colortext [![Build Status](https://travis-ci.com/mattdanielbrown/colortext.svg?branch=master)](https://travis-ci.com/mattdanielbrown/colortext)

> CLI tool to intuitively colorize text strings in Bash, Shell, and Javascript.


## Install

```
$ npm install colortext
```


## Usage

```js
const colortext = require('colortext');

colortext('unicorns');
//=> 'unicorns & rainbows'
```


## API

### colortext(input, options?)

#### input

Type: `string`

Lorem ipsum.

#### options

Type: `object`

##### foo

Type: `boolean`\
Default: `false`

Lorem ipsum.


## CLI

```
$ npm install --global colortext
```

```
$ colortext --help

  Usage
    colortext [input]

  Options
    --foo  Lorem ipsum [Default: false]

  Examples
    $ colortext
    unicorns & rainbows
    $ colortext ponies
    ponies & rainbows
```

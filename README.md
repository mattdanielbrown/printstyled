# colortext [![Build Status](https://travis-ci.com/mattdanielbrown/colortext.svg?branch=master)](https://travis-ci.com/mattdanielbrown/colortext)

> ### CLI tool to intuitively colorize and stylize text in Bash and Javascript Terminals.


## Install

```
$ npm install --global colortext
```


## Usage

```shell script

$ colortext TEXT [COLOR] [STYLE(S)...]

Options
  [COLOR]  		color name 		[Default: white]
  [STYLE(S)]...	style name(s)	[Default: none / normal]
                    Availble Style Values: 'bold', 'italic', 'underline', 'rev'
Examples
  $  colortext "Testing" blue
         Testing

  $  colortext "Testing 2" red bold
         Testing 2

  $  colortext "Testing 3" green bold italic
     Testing 3
```


## API

### `colortext text [color] [style(s)]`

#### text

Type: `string`

The text string to style.

#### color

Type: `string`

Name of color to apply.

##### style(s)

Type: `string(s)`

Default: `none` or `normal`

Styles to apply.


## CLI

```
$ npm install --global colortext
```

```shell script

NAME
  colortext

USAGE
  $ colortext TEXT [COLOR] [STYLE(S)...]

HELP
  $ colortext --help

OPTIONS

  [COLOR]         color name
    # (Availibe Colors: 'white', 'blue', 'red', 'green', 'yellow')
    # [Default: white]

  [STYLE(S)...]    style name(s)
    # (Availible Styles: 'bold', 'italic', 'underline', 'rev')
    # [Default: none / normal]

EXAMPLES

  $  colortext "Testing" blue
    # =>  Testing

  $  colortext "Testing 2" red bold
    # =>  Testing 2

  $  colortext "Testing 3" green bold italic
    # =>  Testing 3
```

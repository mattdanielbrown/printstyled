# printstyled [![Build Status](https://travis-ci.com/mattdanielbrown/printstyled.svg?branch=master)](https://travis-ci.com/mattdanielbrown/printstyled)

> ### CLI tool to intuitively colorize and stylize text in Bash and Javascript Terminals.


## Install

```
$ npm install --global printstyled
```


## Usage

```shell script

$ printstyled TEXT [COLOR] [STYLE(S)...]

Options
  [COLOR]  		color name 		[Default: white]
  [STYLE(S)]...	style name(s)	[Default: none / normal]
                    Availble Style Values: 'bold', 'italic', 'underline', 'rev'
Examples
  $  printstyled "Testing" blue
         Testing

  $  printstyled "Testing 2" red bold
         Testing 2

  $  printstyled "Testing 3" green bold italic
     Testing 3
```


## API

### `printstyled text [color] [style(s)]`

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
$ npm install --global printstyled
```

```shell script

NAME
  printstyled

USAGE
  $ printstyled TEXT [COLOR] [STYLE(S)...]

HELP
  $ printstyled --help

OPTIONS

  [COLOR]         color name
    # (Availibe Colors: 'white', 'blue', 'red', 'green', 'yellow')
    # [Default: white]

  [STYLE(S)...]    style name(s)
    # (Availible Styles: 'bold', 'italic', 'underline', 'rev')
    # [Default: none / normal]

EXAMPLES

  $  printstyled "Testing" blue
    # =>  Testing

  $  printstyled "Testing 2" red bold
    # =>  Testing 2

  $  printstyled "Testing 3" green bold italic
    # =>  Testing 3
```

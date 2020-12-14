'use strict'

const parseOptions = require('./util/parse-options')

module.exports = (input, colorName, otherOpts) => {
  const defaultColor = 'white'
  const defaultText = 'Testing'
  const defaultStyle = 'none'
  return parseOptions(
    input || defaultText,
    colorName || defaultColor,
    otherOpts || defaultStyle
  )
}

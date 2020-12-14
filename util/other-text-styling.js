/* eslint-disable capitalized-comments */
'use strict'
const { bold, dim, inverse, italic, normal, underline } = require('chalk')
module.exports = function (originalText, styleOpts) {
  let resultingText = originalText
  for (const styleOpt of styleOpts) {
    switch (styleOpt) {
      case 'bold':
        // noinspection JSUnresolvedFunction
        resultingText = bold(resultingText)
        break
      case 'italic':
        // noinspection JSUnresolvedFunction
        resultingText = italic(resultingText)
        break
      case 'underline':
        // noinspection JSUnresolvedFunction
        resultingText = underline(resultingText)
        break
      case 'dim':
        /* noinspection JSUnresolvedFunction */
        resultingText = dim(resultingText)
        break
      case 'rev':
        /* noinspection JSUnresolvedFunction */
        resultingText = inverse(resultingText)
        break
      default:
        resultingText = normal(resultingText)
        break
    }
  }

  return resultingText
}

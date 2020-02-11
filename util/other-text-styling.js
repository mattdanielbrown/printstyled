'use strict'
const colors = require('chalk')
module.exports = function (originalText, styleOpts) {
  let resultingText = originalText
  for (const styleOpt of styleOpts) {
    switch (styleOpt) {
      case 'bold':
        // noinspection JSUnresolvedFunction
        resultingText = colors.bold(resultingText)
        break
      case 'italic':
        // noinspection JSUnresolvedFunction
        resultingText = colors.italic(resultingText)
        break
      case 'underline':
        // noinspection JSUnresolvedFunction
        resultingText = colors.underline(resultingText)
        break
      case 'dim':
        // noinspection JSUnresolvedFunction
        resultingText = colors.dim(resultingText)
        break
      case 'rev':
        // noinspection JSUnresolvedFunction
        resultingText = colors.inverse(resultingText)
        break
    }
  }
  return resultingText
}

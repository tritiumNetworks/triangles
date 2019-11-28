const layoutLoader = require('./layoutLoader')
const scriptLoader = require('./scriptLoader')
const styleLoader = require('./styleLoader')

module.exports = () => {
  return {
    layout: layoutLoader(),
    script: scriptLoader(),
    style: styleLoader()
  }
}

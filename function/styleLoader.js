const fs = require('fs')
const path = require('path').resolve()

const style = {}

setInterval(() => {
  fs.readdir(path + '/style', (err, files) => {
    if (err) console.error(err)
    files.forEach((file) => {
      fs.readFile(path + '/style/' + file, (err, data) => {
        if (err) console.error(err)
        else style[file.replace('.css', '')] = '<style>' + data + '</style>'
      })
    })
  })
}, 100)

module.exports = () => { return style }

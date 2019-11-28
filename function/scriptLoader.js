const fs = require('fs')
const path = require('path').resolve()

const script = {}

setInterval(() => {
  fs.readdir(path + '/script', (err, files) => {
    if (err) console.error(err)
    files.forEach((file) => {
      fs.readFile(path + '/script/' + file, (err, data) => {
        if (err) console.error(err)
        else script[file.replace('.js', '')] = data
      })
    })
  })
}, 1000)

module.exports = () => { return script }

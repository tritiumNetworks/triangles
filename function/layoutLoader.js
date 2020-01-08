const fs = require('fs')
const path = require('path').resolve()
const { renderFile } = require('ejs')

const layout = {}

setInterval(() => {
  fs.readdir(path + '/layout', (err, files) => {
    if (err) console.error(err)
    files.forEach((file) => {
      renderFile(path + '/layout/' + file, { layout }, (err, str) => {
        if (err) console.error(err)
        else layout[file.replace('.ejs', '')] = str
      })
    })
  })
}, 100)

module.exports = () => { return layout }

const PORT = 8080

const express = require('express')
const cors = require('cors')
const path = require('path').resolve()
const chalk = require('chalk')
const { renderFile } = require('ejs')
const app = express()

const loader = require('./function/loader')

app.use(cors())
app.use('/res', express.static(path + '/res'))

app.get('/tr', (_req, res) => res.redirect('/triangles'))
app.get('/triangle', (_req, res) => res.redirect('/triangles'))
app.get('/triangles', (_req, res) => renderFile(path + '/view/triangles.ejs', loader(), (err, str) => { if (err) { console.error(err) } else res.send(str) }))

app.listen(PORT, () => console.log(chalk.green('Server is now on http://localhost:' + PORT)))

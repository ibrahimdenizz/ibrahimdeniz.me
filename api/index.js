const bodyParser = require('body-parser')
const app = require('express')()

const resumeRouter = require('./resume')

app.use(bodyParser.json())
app.use('/resume', resumeRouter)

module.exports = app

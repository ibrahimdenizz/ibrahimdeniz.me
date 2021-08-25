const bodyParser = require('body-parser')
const app = require('express')()

const cacheMiddleware = require('./middlewares/cache')

const resumeRouter = require('./resume')

app.use(bodyParser.json())

app.use('/resume', [cacheMiddleware, resumeRouter])

module.exports = app

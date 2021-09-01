const bodyParser = require('body-parser')
const app = require('express')()

const cacheMiddleware = require('./middlewares/cache')

const resumeRouter = require('./resume')
const portfolioRouter = require('./portfolio')

app.use(bodyParser.json())

app.use('/resume', [cacheMiddleware, resumeRouter])
app.use('/portfolio', [cacheMiddleware, portfolioRouter])

module.exports = app

const bodyParser = require('body-parser')
const app = require('express')()

const cacheMiddleware = require('./middlewares/cache')

const resumeRouter = require('./resume')
const portfolioRouter = require('./portfolio')
const contactRouter = require('./contact')

app.use(bodyParser.json())

app.use('/resume', [cacheMiddleware, resumeRouter])
app.use('/portfolio', [cacheMiddleware, portfolioRouter])
app.use('/contact', contactRouter)

module.exports = app

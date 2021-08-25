module.exports = function cacheMiddleware(req, res, next) {
  if (req.method === 'GET') res.setHeader('Cache-Control', 's-maxage=18000')

  next()
}

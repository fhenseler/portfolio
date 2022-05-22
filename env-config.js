const prod = process.env.NODE_ENV === 'production'
module.exports = {
    basePath: '/portfolio',
    'process.env.BACKEND_URL': prod ? '/portfolio' : ''
  }
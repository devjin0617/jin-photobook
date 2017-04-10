let config
switch (process.env.NODE_ENV) {
  case 'develop':
    config = require('./config.dev')
    break
  case 'production':
    config = require('./config.production')
    break
  default:
    console.error('not found env name')
    return
}

module.exports = config
const path = require('path')
const url = require('url')

module.exports = {
  url: url.format({
    pathname: path.join(__dirname, '../', 'index.html'),
    protocol: 'file:',
    slashes: true
  })
}
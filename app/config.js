const path = require('path');

const config = {
  publicDir: path.join(__dirname, '..', 'public'),
  publicIndex: path.join(__dirname, '..', 'public', 'index.html')
}

module.exports = config;
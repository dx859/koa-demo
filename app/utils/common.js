const crypto = require('crypto')
exports.md5 = function(password) {
  const md5 = crypto.createHash('md5')
  return md5.update(password).digest('hex')
}

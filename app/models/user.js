const s = require('sequelize')
const Base = require('./base')
const { md5 } = require('../utils/common')
class User extends Base {}

User.login = async function(email, password) {
  let user = await User.findOne({ where: { email } })

  if (user && user.password === md5(password)) {
    return user
  }
  return false
}

User._init({
  nickname: s.STRING(32),
  email: {
    type: s.STRING(64),
    unique: true
  },
  password: {
    type: s.STRING(64),
    set(val) {
      this.setDataValue('password', md5(val))
    }
  }
})

module.exports = User

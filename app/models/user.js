const sequelize = require('sequelize')
const Base = require('./base')

class User extends Base {}

User._init({
  nickname: sequelize.STRING(32),
  email: sequelize.STRING(64),
  password: sequelize.STRING(64)
})

module.exports = User

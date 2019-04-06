const Sequelize = require('sequelize')
const config = require('../config')
const sequelize = new Sequelize(config.dbUrl, { pool: { max: 5, min: 0 } })

class Base extends Sequelize.Model {
  static _init(attributes, options) {
    this.init(attributes, {
      underscored: true,
      sequelize,
      ...options
    })
  }
}
// sequelize.sync()
module.exports = Base

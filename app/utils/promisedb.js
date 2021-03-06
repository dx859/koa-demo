const mysql = require('mysql')
const config = require('../config')

class DB {
  constructor(opts) {
    this.conn = null
    this.opts = opts
    if (opts != null) {
      this.conn = mysql.createPool(Object.assign({ connectionLimit: 5 }, opts))
    }
  }

  configure(opts) {
    this.opts = opts
    if (this.conn) this.end()
    this.conn = mysql.createConnection(opts)
  }

  query(sql, data) {
    return new Promise((resolve, reject) => {
      if (data == null) {
        this.conn.query(sql, function (err, results) {
          if (err)
            reject(err)
          else
            resolve(results)

        })
      } else {
        this.conn.query(sql, data, function (err, results) {
          if (err)
            reject(err)
          else
            resolve(results)
        })
      }
    })
  }

  end() {
    this.conn.end()
  }
}

module.exports = new DB(config.db);
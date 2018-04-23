const path = require('path');
const rootPath = path.join(__dirname, '..')

const config = {
  publicDir: path.join(rootPath, 'public'),
  viewPath: path.join(rootPath, 'app', 'views'),
  publicIndex: path.join(rootPath, 'public', 'index.html'),
  faviconPath: path.join(rootPath, 'favicon.ico'),
  sessionConfig: {
    key: 'koa:sess',
    maxAge: 86400000,
    overwrite: true, /** (boolean) can overwrite or not (default true) */
    httpOnly: true, /** (boolean) httpOnly or not (default true) */
    signed: true, /** (boolean) signed or not (default true) */
    rolling: false,
  },
  db: {
    host: 'mysql-test.myfuwu.com.cn',
    port: 63316,
    user: 'mysscm',
    password: 'rqaN2xu&jpolChw2',
    database: 'cz_config'
  },
}

module.exports = config;
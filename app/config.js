const path = require('path')
const rootPath = path.join(__dirname, '..')
const envConfig = require('dotenv').config().parsed

const config = {
  publicDir: path.join(rootPath, 'public'),
  viewPath: path.join(rootPath, 'app', 'views'),
  publicIndex: path.join(rootPath, 'public', 'index.html'),
  faviconPath: path.join(rootPath, 'favicon.ico'),
  sessionConfig: {
    key: 'koa:sess',
    maxAge: 86400000,
    overwrite: true /** (boolean) can overwrite or not (default true) */,
    httpOnly: true /** (boolean) httpOnly or not (default true) */,
    signed: true /** (boolean) signed or not (default true) */,
    rolling: false
  },
  dbUrl: ''
}

module.exports = { ...config, ...envConfig }

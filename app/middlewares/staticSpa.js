function staticSpa(options = {}) {
  const opts = Object.assign({}, { folder: __dirname, prefix: '/app', verbose: false }, options)
  const { folder, prefix, verbose } = opts


  const spa = koa()
  spa.use(function * (next) {
    try {
      fs.statSync(folder).isDirectory()
    } catch(err) {
      this.throw('Invalid SPA folder', 404)
    }
    const middleware = historyApiFallback({ verbose })
    const noop = function () {}
    middleware(this, null, noop)
    return yield next
  })
  spa.use(serve(folder))

  return function *staticSpa(next) {
    yield mount(prefix, spa).call(this, next)
    const regx = new RegExp('\\' + prefix + '$')
    if (regx.test(this.path)) {
      yield addTrailingSlashes().call(this, next)
    }
    return yield next
  }
}

module.exports = staticSpa;
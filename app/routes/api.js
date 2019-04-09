const Router = require('koa-router')
const { loginRequired } = require('../middlewares/auth')
const user = require('../api/user')
const auth = require('../api/auth')
const apiRouter = new Router()

apiRouter.get('/user/:id', loginRequired, user.getUser)
apiRouter.post('/login', auth.login)
apiRouter.post('/register', auth.register)
module.exports = apiRouter

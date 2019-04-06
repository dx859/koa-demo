const Router = require('koa-router')
const user = require('../api/user')

const apiRouter = new Router()

apiRouter.get('/user/:id', user.getUser)

module.exports = apiRouter

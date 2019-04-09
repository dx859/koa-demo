const User = require('../models/user')

exports.login = async ctx => {
  let body = ctx.request.body
  let result = await User.login(body.email, body.password)
  if (result) {
    ctx.session.user = {
      id: result.id,
      email: result.email,
      nickname: result.nickname
    }
    ctx.body = {
      status: 1
    }
  } else {
    ctx.body = {
      status: 0
    }
  }
}

exports.register = async ctx => {
  let body = ctx.request.body
  let result = await User.create(body)
  ctx.body = result
}

const User = require('../models/user')

exports.getUser = async ctx => {
  let user = await User.findOne({
    attribute: { exclude: ['password'] },
    where: { id: ctx.params.id }
  })

  ctx.body = { user }
}

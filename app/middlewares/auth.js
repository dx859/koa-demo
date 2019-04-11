exports.loginRequired = async (ctx, next) => {
  console.log(ctx.session.user)
  if (ctx.session.user) {
    await next()
  } else {
    await next()
  }
}

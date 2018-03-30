const router = require('koa-router')();
const postController = require('./controllers/postController');
const send = require('koa-send');
const config = require('./config');

router.get('/:tenant?*', async (ctx, next) => {
  // ctx.body = 'heloo';

  await send(ctx, 'index.html', {root: config.publicDir})
})

router.get('*', async (ctx, next) => {

  ctx.body = 'hello'
})



module.exports = router;
const router = require('koa-router')();
const postController = require('./controllers/postController');


router.get('/', postController.list)
  .get('/post/new', postController.add)
  .get('/post/:id', postController.show)
  .post('/post', postController.create);


module.exports = router;
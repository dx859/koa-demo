const postController = require('../controllers/postController');
const Router = require('koa-router');

const router = new Router();

router.get('/', postController.list)

module.exports = router;
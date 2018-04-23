const Router = require('koa-router');
const todoController = require('../controllers/todoController');

const apiRouter = new Router();

apiRouter.get('/todos', todoController.list)
apiRouter.post('/todo', todoController.list)

module.exports = apiRouter;
const Router = require('koa-router');
const loselandAction = require('../controllers/loselandAction');

const apiRouter = new Router();

apiRouter.all('/loseland/save', loselandAction.saveItem);
apiRouter.get('/loseland/food', loselandAction.selectItem);

module.exports = apiRouter;
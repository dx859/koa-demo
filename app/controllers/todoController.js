const todos = require('../services/todos');

exports.list =  async function(ctx) {
  
  let list = await todos.getList()
  ctx.body = list;
}

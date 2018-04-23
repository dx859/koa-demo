const db = require('../utils/promisedb');

exports.getList = async()=>{
  let list = await db.query(`
    SELECT id, user_id, task_id, title, is_completed, 
      DATE_FORMAT(create_at,'%Y-%c-%d %h:%i:%s') as create_at,
      DATE_FORMAT(plan_complete_at,'%Y-%c-%d %h:%i:%s') as plan_complete_at,
      DATE_FORMAT(complete_at,'%Y-%c-%d %h:%i:%s') as complete_at
      FROM todo_todos
  `);
  return list;
}

exports.addTodo = async(...args) => {
  await db.query(`
    INSERT todos(user_id, task_id, title, plan_complete_at)
      VALUES(?,?,?,?)
  `, args)
}
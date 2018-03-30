const render = require('./lib/render');
const logger = require('koa-logger');
const koaBody = require('koa-body');
const Koa = require('koa');
const http = require('http');
const socket = require('socket.io');
const router = require('./router');
const mount = require('koa-mount');
const serve = require('koa-static');
const path = require('path')
const config = require('./config')
const send = require('koa-send');
app = new Koa();

app.use(serve(path.join(__dirname, '..', 'public'), {
  maxAge: 1000 * 60 * 60 * 24 * 30
}))
// app.use(async(ctx, next)=> {
//   ctx.body = 'hello'
// })

// "database"

// const posts = [];

// // middleware

// app.use(logger());

// app.use(render);

// app.use(koaBody());

// // route definitions
// const folder = path.join(__dirname, '..', 'public');
// app.use(mount('/', staticspa(folder)))
app.use(router.routes());


// const server = http.Server(app.callback());
// const io = socket(server);

// io.on('connection', function(socket){
  
//   socket.on('chat message', function(msg){
//     io.emit('chat message',  msg);
//   });
// });
    
// listen

if (!module.parent) app.listen(3000);

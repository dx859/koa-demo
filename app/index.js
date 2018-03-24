const render = require('./lib/render');
const logger = require('koa-logger');
const koaBody = require('koa-body');
const Koa = require('koa');
const http = require('http');
const socket = require('socket.io');
const app = module.exports = new Koa();
const router = require('./router');

// "database"

const posts = [];

// middleware

app.use(logger());

app.use(render);

app.use(koaBody());

// route definitions

app.use(router.routes());

const server = http.Server(app.callback());
const io = socket(server);

io.on('connection', function(socket){
  
  socket.on('chat message', function(msg){
    io.emit('chat message',  msg);
  });
});
    
// listen

if (!module.parent) server.listen(3000);

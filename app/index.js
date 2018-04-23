const Koa = require('koa')
const app = new Koa()

const middlewares = require('./middlewares')


// middlewares
app.use(middlewares(app))

app.keys = ['fhQfGCNn', 'l4rRBRzP']

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

app.listen(process.env.PORT || '4000');

module.exports = app

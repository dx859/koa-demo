const compose = require('koa-compose');
const logger = require('koa-logger');
const bodyparser = require('koa-bodyparser');
const json = require('koa-json');
const favicon = require('koa-favicon');
const views = require('koa-views');
const static = require('koa-static');
const router = require('../routes');
const config = require('../config');
const page404 = require('./page404');
const session = require('koa-session');
const errorHanding = require('./errorHanding');



module.exports = function (app) {
    return compose([
        errorHanding,
        bodyparser({enableTypes: ['json', 'form', 'text']}),
        json(),
        static(config.publicDir, {
            maxage: 1000*60*60*24*30,
            gzip: true
        }),
        logger(),
        views(config.viewPath, {map: {ejs: 'ejs'}, extension: 'ejs'}),
        session(config.sessionConfig, app),
        router.routes(),
        router.allowedMethods(),
        page404
    ])
}
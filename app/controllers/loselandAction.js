const loseland = require("../services/loseland");


exports.saveItem = async (ctx) => {
    let body = ctx.request.body;
    loseland.saveItem(body.name, body.data);
    ctx.body = {status: 1}
};

exports.selectItem = async (ctx) => {
    let item = await loseland.selectItem('food');
    ctx.body = {status: 1, body: item}
};
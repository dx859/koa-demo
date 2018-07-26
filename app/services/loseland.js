const fs = require("fs");
const path = require('path');
const config = require('../config');

exports.saveItem = (name, data) => {
    fs.writeFileSync(path.join(config.rootPath, 'data', 'item', `${name}.json`), JSON.stringify(data))
};

exports.selectItem = (name) => {
    let item = fs.readFileSync(path.join(config.rootPath, 'data', 'item', `${name}.json`));
    try {
        return JSON.parse(item)
    } catch (e) {
        return null
    }

};
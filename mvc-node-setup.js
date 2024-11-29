#!/usr/bin/env node

const fs = require('fs');


if (!fs.existsSync(`./views`)){
    fs.mkdirSync(`./views`);
};
if (!fs.existsSync(`./public`)){
    fs.mkdirSync(`./public`);
};
if (!fs.existsSync(`./controllers`)){
    fs.mkdirSync(`./controllers`);
};
if (!fs.existsSync(`./routes`)){
    fs.mkdirSync(`./routes`);
};
if (!fs.existsSync(`./models`)){
    fs.mkdirSync(`./models`);
};
if (!fs.existsSync(`./app.js`)){
    fs.writeFileSync(`./app.js`,'');
};
if (!fs.existsSync(`./server.js`)){
    fs.writeFileSync(`./server.js`,'');
};
if (!fs.existsSync(`./.env`)){
    fs.writeFileSync(`./.env`,'');
};
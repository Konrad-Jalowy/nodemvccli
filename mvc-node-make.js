#!/usr/bin/env node

const fs = require('fs');
if(process.argv.length !== 3){
    console.log("Argument name not provided");
    process.exit()
}
let _name = process.argv[2];
console.log("Name: ", _name);
fs.writeFileSync(`./controllers/${_name}Controller.js`,'');
fs.writeFileSync(`./models/${_name}Model.js`,'');
fs.writeFileSync(`./routes/${_name}Routes.js`,'');
if (!fs.existsSync(`./views/${_name}`)){
    fs.mkdirSync(`./views/${_name}`);
}
//compare execution of  sync and async file read operation in node

const fs = require('fs');

const data = fs.readFileSync('input2.txt', 'utf8');
console.log(data);
console.log('Done');



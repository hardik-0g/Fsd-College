//compare execution of  sync and async file read operation in node

const fs = require('fs');

fs.readFile('input2.txt', 'utf8', (err, data) => {
  console.log(data);
});

console.log('Done');

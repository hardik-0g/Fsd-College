//create a node js program that reads content from a file named input.txt and writes it to another file named output.txt

const fs = require('fs');

fs.copyFile('input.txt', 'output.txt', (err) => {
  if (err) throw err;
  console.log('File copied!');
});

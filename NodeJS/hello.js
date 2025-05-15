const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

inquirer.prompt([
  { type: 'input', name: 'username', message: 'Tên bạn là gì?' }
]).then(answers => {
  console.log('Xin chào', answers.username);
});
process.stdout.write('Xin chào');

const data = fs.readFile(path.join(__dirname,'hello.txt'), 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});

const pathHello = path.join(__dirname, 'hello.txt');

console.log(pathHello);
console.log(process.cwd());

const write = fs.writeFile(pathHello, 'Hello', (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('Ghi file thành công');
});

console.log(__filename);
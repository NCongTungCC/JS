// const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

// inquirer.prompt([
//   { type: 'input', name: 'username', message: 'Tên bạn là gì?' }
// ]).then(answers => {
//   console.log('Xin chào', answers.username);
// });
// process.stdout.write('Xin chào');

// const data = fs.readFile(path.join(__dirname,'hello.txt'), 'utf8', (err, data) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log(data);
// });

// const pathHello = path.join(__dirname, 'hello.txt');

// console.log(pathHello);
// console.log(process.cwd());

// const write = fs.writeFile(pathHello, 'Hello', (err) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log('Ghi file thành công');
// });

// console.log(__filename);

console.log('Hello world');

const data = fs.readFile(path.join(__dirname,'hello.txt'), 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});

Promise.resolve()
  .then(() => {
    console.log('Hello');
  })
  .catch((err) => {
    console.error(err);
  });

setTimeout(() => {
  console.log('setTimeout');
}, 1000);
setImmediate(() => {
  console.log('immediate');
});
process.nextTick(() => {
  console.log('tick');
});
console.log(cong(1,2));
function cong(a, b) {
  return a + b;
}
console.log('B');
const hello2 = () => {
  console.log('Hello');
}
function hello(hello2) {
  console.log('Hello');
  hello2();
}
hello(hello2);


const hello3 = function() {
  console.log('Hello');
}



const inquirer = require('inquirer');

inquirer.prompt([
  { type: 'input', name: 'username', message: 'Tên bạn là gì?' }
]).then(answers => {
  console.log('Xin chào', answers.username);
});
process.stdout.write('Xin chào');
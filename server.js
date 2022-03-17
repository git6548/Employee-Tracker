const inquirer = require('inquirer');



const promptUser = () => {
    return inquirer.prompt([
      {
        type: 'list',
        name: 'action',
        message: 'What would you like to do',
        choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an Employee', 'Update an employee role'],
        },
    ])
  };

  promptUser();

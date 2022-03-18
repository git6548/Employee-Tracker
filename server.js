const inquirer = require('inquirer');
const {db} = require('./config/connection');



const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'list',
      name: 'action',
      message: 'What would you like to do',
      choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an Employee', 'Update an employee role'],
    },
  ])
    .then(actionChoice => {
      if (actionChoice.action === 'View all departments') {
        const sql = `SELECT * FROM departments`;
        db.query(sql, (err, result) => {
          if (err) {
            console.log(err);
          }
          console.log(result);
        });
      }
      else if (actionChoice.action === 'View all roles') {
        //call the function that shows all roles from functions      
      }
      else if (actionChoice.action === 'View all employees') {
        //call the function that shows all employees from functions     
      }
      else if (actionChoice.action === 'Add a department') {
        addDeptQuestions();
        //then I need to put this into a query
      }
      else if (actionChoice.action === 'Add a role') {
        addRoleQuestions();
      }
      else if (actionChoice.action === 'Add an Employee') {
        addEmployeeQuestions();
      }
      else {
        UpdateEmployeeQuestions();
      }
    });;
};

const addDeptQuestions = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'dept_name',
      message: 'What is the department name?'
    }
  ])
  .then((deptData) => {
    const dept = new Dept(deptData.dept_name)
    deptData.push(dept);
  })
};

const addRoleQuestions = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'role_title',
      message: 'What is the title of this role?'
    },
    {
      type: 'input',
      name: 'role_salary',
      message: 'What is the salary for this role?'
    },
    {
      type: 'input',
      name: 'role_dept_id',
      message: 'What is the department ID for this role?'
    }
  ])
};

const addEmployeeQuestions = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'employee_first_name',
      message: 'What is the employees first name?'
    },
    {
      type: 'input',
      name: 'employee_last_name',
      message: 'What is the employees last name?'
    },
    {
      type: 'input',
      name: 'employee_role_id',
      message: 'What is the employees role ID?'
    },
    {
      type: 'input',
      name: 'employee_manager_id',
      message: 'What is the employees managers ID?'
    }
  ])
};

const UpdateEmployeeQuestions = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'employee_first_name',
      message: 'What is the employees first name?'
    },
    {
      type: 'input',
      name: 'employee_last_name',
      message: 'What is the employees last name?'
    },
    {
      type: 'input',
      name: 'employee_role_id',
      message: 'What is the employees new role ID?'
    }
  ])
};

promptUser();

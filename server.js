const inquirer = require('inquirer');
const db = require('./config/connection');

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
        viewDepartments();
      }
      else if (actionChoice.action === 'View all roles') {
        viewRoles();    
      }
      else if (actionChoice.action === 'View all employees') {
        //call the function that shows all employees from functions     
        viewEmployees();
      }
      else if (actionChoice.action === 'Add a department') {
        addDeptQuestions();
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
// here are all of the sql query functions
const viewDepartments = () => {
  const sql = `SELECT * FROM departments`;
  db.query(sql, (err, result) => {
    if (err) {
      console.log(err);
    }
    console.table(result);
  });
};

const viewRoles = () => {
  const sql = `SELECT * FROM roles`;
  db.query(sql, (err, result) => {
    if (err) {
      console.log(err);
    }
    console.table(result);
  });
};

const viewEmployees = () => {
  const sql = `SELECT * FROM employees`;
  db.query(sql, (err, result) => {
    if (err) {
      console.log(err);
    }
    console.table(result);
  });
};


//here are the additional prompt functions
const addDeptQuestions = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'dept_name',
      message: 'What is the department name?'
    }
  ])
    .then((deptData) => {
      const sql = `INSERT INTO departments
  (name)
  VALUES
  ("${deptData.dept_name}")`;
      db.query(sql, (err, result) => {
        if (err) {
          console.log(err);
        }
        viewDepartments()
        console.log("Department has been added");
      });
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
  .then((roleData) => {
    const sql = `INSERT INTO roles
(title, salary, department_id)
VALUES
("${roleData.role_title}",${roleData.role_salary}, ${roleData.role_dept_id})`;
    db.query(sql, (err, result) => {
      if (err) {
        console.log(err);
      }
      viewRoles()
      console.log("Role has been added");
    });
  })
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
  .then((employeeData) => {
    const sql = `INSERT INTO employees
(first_name, last_name, role_id, manager_id)
VALUES
("${employeeData.employee_first_name}","${employeeData.employee_last_name}", ${employeeData.employee_role_id}, ${employeeData.employee_manager_id})`;
    db.query(sql, (err, result) => {
      if (err) {
        console.log(err);
      }
      viewEmployees()
      console.log("Employee has been added");
    });
  })
};

const UpdateEmployeeQuestions = async () => {
  const sql = `SELECT * FROM employees`;
  db.query(sql, (err, result) => {
    if (err) {
      console.log(err);
    }
    let empFirstName = result.map(name => name.id + ". " + name.first_name + " " + name.last_name)

    inquirer.prompt([
      {
        type: 'list',
        name: 'employee_first_name',
        message: 'What is the employees first name?',
        choices: empFirstName
      },
      {
        type: 'input',
        name: 'employee_role_id',
        message: 'What is the employees new role ID?'
      }
    ])
  }) 
//    .then((employeeUpdatedData) => {
//     const sql = `UPDATE employees
//     SET role_id= ${employeeUpdatedData.employee_role_id}
//     WHERE 
//     first_name = ${name.first_name} & last_name = ${name.last_name}
// `;
//     db.query(sql, (err, result) => {
//       if (err) {
//         console.log(err);
//       }
//       viewEmployees()
//       console.log("Employee has been updated");
//     });
// })


};

promptUser();

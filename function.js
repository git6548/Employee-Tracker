//const connection = require('./config/connection');
//view all departments

allDepts =>{
const sql = `SELECT * FROM departments`;
db.query(sql, (err, result) => {
  if (err) {
    console.log(err);
  }
  console.log(result);
})};


//   // view all departments
// SELECT * FROM departments;
// //  view all roles
// SELECT * FROM roles;
// //  view all employees
// SELECT * FROM employees;
// //  add a department
// INSERT INTO departments
// (name)
// VALUES
// ();
// //  add a role
// INSERT INTO roles
// (title, salary, department_id)
// VALUES
// ();
// //  add an employee
// INSERT INTO employees
// (first_name, last_name, role_id)
// VALUES
// ();
// //  update an employee role
// Update employees
// SET role_id =
// WHERE first_name = && last_name = ;

// // module.exports = {


// // };


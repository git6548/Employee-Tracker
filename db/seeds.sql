INSERT INTO departments
(name)
VALUES
("Suzy"),("Jill"),("Jane");

INSERT INTO roles
(title, salary, department_id)
VALUES
("Manager", 100000, 2),
("Doctor", 100000, 1),
("Actor", 100000, 3);


INSERT INTO employees
(first_name, last_name, role_id, manager_id)
VALUES("Jill", "Jackson", 1,2),
("Jane", "Peterson", 2,1),
("Suzy","Stevenson", 3,3);


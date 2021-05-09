USE employee_db;

INSERT INTO department (name)
VALUES ("Inventory");
INSERT INTO department (name)
VALUES ("Material Coordination");
INSERT INTO department (name)
VALUES ("Finance");
INSERT INTO department (name)
VALUES ("Warehouse");
INSERT INTO department (name)
VALUES ("Operations");
INSERT INTO department (name)
VALUES ("Wells");


INSERT INTO role (title, salary, department_id)
VALUES ("Inventory Lead", 175000, 1);
INSERT INTO role (title, salary, department_id)
VALUES ("Inventory Analyst", 100000, 1);
INSERT INTO role (title, salary, department_id)
VALUES ("MC Lead", 185000, 2);
INSERT INTO role (title, salary, department_id)
VALUES ("Material Coordinator", 110000, 2);
INSERT INTO role (title, salary, department_id)
VALUES ("Head of Finance", 200000, 3);
INSERT INTO role (title, salary, department_id)
VALUES ("Controller", 115000, 3);
INSERT INTO role (title, salary, department_id)
VALUES ("Warehouse Lead", 185000, 4);
INSERT INTO role (title, salary, department_id)
VALUES ("Material Handler", 75000, 4);
INSERT INTO role (title, salary, department_id)
VALUES ("Ops Lead", 250000, 5);
INSERT INTO role (title, salary, department_id)
VALUES ("Planner", 175000, 5);
INSERT INTO role (title, salary, department_id)
VALUES ("Wells Lead", 300000, 6);
INSERT INTO role (title, salary, department_id)
VALUES ("Drilling Engineer", 200000, 6);


INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Bob", "Newhart", 1, NULL);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Janie", "Gottagun", 2, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Herbie", "Handerson", 3, NULL);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Lily", "Aldrin", 4, 3);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Marshall", "Erikksen", 5, NULL);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Barney", "Stinson", 6, 5);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Ted", "Moseby", 7, NULL);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Aaron", "Buster", 8, 7);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Deanna", "Bermudes", 9, NULL);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("RJ", "Terranova", 10, 9);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Lisa", "DeViney", 11, NULL);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Tom", "Letchford", 12, 11);
const inquirer = require("inquirer");
const mysql = require('mysql');
require("console.table");


const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Taglag01!',
    database: 'employee_db',
  });
  
  connection.connect((err) => {
    if (err) throw err;
    beginPrompt();    
  });

function beginPrompt() {
    inquirer
        .prompt({
            type: "list",
            name: "actions",
            message: "Choose an action in the below choices:",
            choices: [
                "List Employee(s)",
                "List Employee(s) by Department",   
                "Add Employee(s)",
                "Remove Employee(s)",
                "Update Employee Role",
                "Add Role",
                "Exit"]
        })
        .then(function ({ actions }) {
            switch (actions) {
                case "List Employee(s)":
                    listEmployee();
                    break;
                case "List Employee(s) by Department":
                    listEmployeeByDept();
                    break;
                case "Add Employee":
                    addEmployee();
                    break;
                case "Remove Employee":
                    removeEmployee();
                    break;
                case "Update Employee Role":
                    updateEmployeeRole();
                    break;
                case "Add Role":
                    addRole();
                    break;
                case "Exit":
                    connection.end();
                    break;
            }
        })
}

// List employees --- All
function listEmployee() {
    console.log("Listing employees\n");

    var query = 
    `SELECT e.id, e.first_name, e.last_name, r.title, d.name AS department, r.salary, CONCAT(m.first_name, " ", m.last_name) AS manager
    FROM employy e
    LEFT JOIN role r
    ON e.role_id = r.id
    LEFT JOIN department d
    ON d.id = r.department_id
    LEFT JOIN employee m
    ON m.id = e.manager_id`

    connection.query(query, function (err, res) {
        if (err) throw err;

        console.table(res);
        console.log("Employees listed\n");

        beginPrompt();
    });

}

function listEmployeeByDept() {
    console.log("Listing employees by department\n");

    var query = 
    `SELECT d.id, d.name, r.salary AS budget
    FROM employee e
    LEFT JOIN role r
    ON e.role_id = r.id
    LEFT JOIN department d
    ON d.id = r.department_id
    GROUP BY d.id, d.name`

    connection.query(query, function (err, res) {
        if (err) throw err;

        const deptOptions = res.map(data => ({
            value: data.id, name: data.name
        }));

        console.table(res);
        console.log("Select Department\n");

        promptDepartment(deptOptions);

    });

}

function promptDepartment(deptOptions) {
    inquirer
        .prompt([
            {
                type: "list",
                name: "departmentId",
                message: "Select the department to view",
                choices: deptOptions
            }
        ])
        .then(function (answer) {
            console.log("answer ", answer.departmentId);

            var query = 
            `SELECT e.id, e.first_name, e.last_name, r.title, d.name AS department
            FROM employee e
            JOIN role r
            ON e.role id = r.id
            JOIN department d
            ON d.id = r.department_id
            WHERE d.id = ?`

            connection.query(query, answer.departmentId, function (err, res) {
                if (err) throw err;

                console.table("response ", res);
                console.log(res.affectedRows + "Employees listed by department\n");

                beginPrompt();
            });
        });
}

function addEmployee() {

};

function removeEmployee() {

};
  
function updateEmployeeRole() {

};

function addRole() {

};
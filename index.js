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
            message: "Choose an action from the below choices:",
            choices: [
                "List Employee(s)",
                "List Employee(s) by Department",
                "List Roles",
                "List Departments",   
                "Add Employee(s)",
                // "Remove Employee(s)",
                // "Update Employee Role",
                // "Add Role",
                "Exit"]
        })
        .then(function ({ actions }) {
            switch (actions) {
                case "List Employee(s)":
                    listEmployees();
                    break;
                case "List Employee(s) by Department":
                    listEmployeesByDept();
                    break;
                case "List Roles":
                    listRoles();
                    break;
                case "List Departments":
                    listDept();
                    break;
                case "Add Employee":
                    addEmployee();
                    break;
                // case "Remove Employee":
                //     removeEmployee();
                //     break;
                // case "Update Employee Role":
                //     updateEmployeeRole();
                //     break;
                // case "Add Role":
                //     addRole();
                //     break;
                case "Exit":
                    connection.end();
                    break;
            }
        })
}

// List employees --- All
function listEmployees() {
    console.log("Listing employees\n");

    var query = 
    `SELECT e.id, e.first_name, e.last_name, r.title, d.name AS department, r.salary, CONCAT(m.first_name, " ", m.last_name) AS manager
    FROM employee e
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

function listEmployeesByDept() {
    console.log("Listing employees by department\n");

    connection.query("SELECT * FROM department", (error, result) => {
        if (error) throw error;

        inquirer.prompt([
            {
                type: "list",
                name: "departmentOptions",
                message: "Select department to list employees by department: ",
                choices: result.map((dept) => {
                    return {
                        name: `${dept.id}: ${dept.name}`,
                        value: dept
                    }
                })
            }
        ]).then(({ departmentOptions }) => {
            console.log(departmentOptions);

            connection.query(`SELECT
            e.id,
            CONCAT(e.first_name, ' ' ,e.last_name) AS Employee,
            role.title AS Title,
            department.name AS Department,
            CONCAT("$",role.salary) AS Salary,
            IFNULL(CONCAT(m.first_name, ' ' ,m.last_name), 'NO MANAGER') AS Manager
            FROM employee e
            LEFT JOIN employee m ON e.manager_id = m.id
            INNER JOIN role ON e.role_id = role.id
            INNER JOIN department ON role.department_id = department.id
            WHERE role.department_id = ?
            
            ORDER BY e.id;`, departmentOptions.id, (error, results) => {
            if (error) throw error;

            console.table(results);
            beginPrompt();
        })
        })
    })
};

const listRoles = () => {
    connection.query(`SELECT
    role.id AS ID,
    role.title AS Title,
    department.name AS Department,
    CONCAT("$",role.salary) AS Salary
    FROM role
    INNER JOIN department ON role.department_id = department.id
    ORDER BY department.id, ID;`, (err, results) => {
        if (err) throw err;
        console.table(results);
        beginPrompt();
    });
};


const listDept = () => {
    connection.query(`SELECT
    department.id AS ID,
    department.name AS Department,
    SUM(role.salary) AS Utilized_Budget
    FROM department
    LEFT JOIN role ON role.department_id = department.id
    GROUP BY department.id;`, (err, results) => {
        if (err) throw err;
        console.table(results);
        beginPrompt();
    });
};

function addEmployee () {
    
}


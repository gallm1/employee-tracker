const inquirer = require("inquirer");
const mysql = require('mysql');


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
            name: "options",
            message: "Would you like to do?",
            choices: [
                "View Employee(s)",
                "View Employee(s) by Department",   
                "Add Employee(s)",
                "Remove Employee(s)",
                "Update Employee Role",
                "Add Role",
                "Exit"]
        })
        .then(function ({ options }) {
            switch (options) {
                case "View Employee(s)":
                    viewEmployee();
                    break;
                case "View Empployee(s) by Department":
                    viewEmployeeByDept();
                    break;
                case "Add Employee(s)":
                    addEmployee();
                    break;
                case "Remove Employee(s)":
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

function viewEmployee() {

};

function viewEmployeeByDept() {

};

function addEmployee() {

};

function removeEmployee() {

};
  
function updateEmployeeRole() {

};

function addRole() {

};
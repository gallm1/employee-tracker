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
            type:

        })

}


  
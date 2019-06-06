let mysql = require("mysql");
let inquirer = require("inquirer");
let cliTable = require("cli-table2");

let connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "bamazon_db"
})

connection.connect();
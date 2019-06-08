let mysql = require("mysql");
let inquirer = require("inquirer");
let Table = require("cli-table2");

let connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "bamazon_db",
    port: 3306
})

connection.connect();

var display = function() {
    connection.query("SELECT * FROM products", function(error, response){
        if (error) throw error;
        console.log("Welcome to Bamazon");
    });
    var table = new Table({
        head: ['Product Id', 'Product Description', 'Product Cost'],
        colWidths: [12, 50, 12],
        colAligns: ["center", "left", "right"],
        style: {
            head: ["aqua"],
            compact: true
        }
    });
    for (var i = 0; i < response.length; i++) {
        table.push([response[i].id, response[i].products_name, response[i].price]);
    }
    console.log(table.toString());
    console.log("");
};

display();
/**
 * Created by Carlos Leonardo Camilo Vargas Huamán on 3/2/17.
 */

var config = require("./config/config");
var EmployeeEntity = require("./entity/EmployeeEntity");
var express = require("express");
var app = express();

var employee = require("./routes/employee");

console.log("Connecting to service.");

EmployeeEntity.initEmployee({
    host: config.db.host,
    user: config.db.user,
    password: config.db.password,
    database: config.db.database,
    port: config.db.port
}).then(function (employeeObject) {

    console.log("Connected. Starting server...");

    //let employeeEntity = EmployeeEntity.initEmployee(connectionObject);

    employee(app, employeeObject);

    app.listen(config.port, ()=>{
        console.log("listening by 8123 port");
    });
});





/**
 * Created by Carlos Leonardo Camilo Vargas Huamán on 3/2/17.
 */

var config = require("./config/config");
var handleConnection = require("./config/handleConnection");
var Employee = require("./entity/EmployeeEntity");
var express = require("express");
var app = express();

var employee = require("./routes/employee");




handleConnection.connect({
    host: config.db.host,
    user: config.db.user,
    password: config.db.password,
    database: config.db.database,
    port: config.db.port
}).then(function (connectionObject) {
    console.log(connectionObject);

    employee(app, new Employee(connectionObject));
});





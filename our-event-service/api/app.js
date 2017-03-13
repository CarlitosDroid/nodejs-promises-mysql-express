/**
 * Created by Carlos Leonardo Camilo Vargas Huamán on 3/2/17.
 */

var config = require("./config/config");
var handleConnection = require("./config/handleConnection");
var EmployeeEntity = require("./entity/EmployeeEntity");
var UserEntity = require("./entity/UserEntity");
var MeetingPlaceEntity = require("./entity/MeetingPlaceEntity");
var express = require("express");
var app = express();

console.log("Connecting to service . Starting server...");

handleConnection.connect({
    host: config.db.host,
    user: config.db.user,
    password: config.db.password,
    database: config.db.database,
    port: config.db.port
}).then(function (connectionObject) {

    console.log("Connected. Starting server...");
    let employeeEntity = EmployeeEntity.createEmployee(connectionObject);
    let meetingPlaceEntity = MeetingPlaceEntity(connectionObject);
    let userEntity = UserEntity(connectionObject);

    require("./routes/employee")(app, employeeEntity);
    require("./routes/meetingPlace")(app, meetingPlaceEntity);
    require("./routes/user")(app, userEntity);

    app.listen(config.port, ()=>{
        console.log("listening by "+config.port+" port");
    });
});





/**
 * Created by Carlos Leonardo Camilo Vargas Huamán on 3/2/17.
 */

var config = require("./config/config");
var employee = require("./routes/Employee");

console.log(config.port);
console.log(config.db);
console.log(config.db.host);

employee.connect({
    host: config.db.host,
    user: config.db.user,
    password: config.db.password,
    database: config.db.database,
    port: config.db.port
}).then(function (connectionObject) {
    console.log(connectionObject);
});





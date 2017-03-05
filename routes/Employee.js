/**
 * Created by Carlos Leonardo Camilo Vargas Huamán on 3/5/17.
 */

'use strict';

var mysql = require('mysql');

class Employee {
    constructor(connection) {
        this.connection = connection;
    }

    getEmployee() {
        connection.query('CALL sp_GetEmployee();', function (error, result, fields) {
            if (error) throw error;

            if (result[0].length == 0) {
                res.status(404).send({
                    status: "ERROR",
                    message: "No existe usuario en Base de Datos"
                });
            } else {
                res.status(202).send({
                    status: "SUCCESS",
                    message: "User was found",
                    data: result[0]
                });
            }
        });
    }

    disconnect() {
        this.connection.end();
    }
}

module.exports.connect = (connectionSettings) => {

    return new Promise((resolve, reject) => {

        if (!connectionSettings.host) throw new Error("A host must be specified.");
        if (!connectionSettings.user) throw new Error("A user must be specified.");
        if (!connectionSettings.password) throw new Error("A password must be specified.");
        if (!connectionSettings.database) throw new Error("A database must be specified.");
        if (!connectionSettings.port) throw new Error("A port must be specified.");

        let connection = mysql.createConnection({
            host: process.env.DATABASE_HOST || '127.0.0.1',
            user: 'users_service',
            password: '123',
            database: 'CHIRINOS',
            port: 3306
        });

        connection.connect(function (err) {
            if (err) {
                reject("error connecting " + err.stack);
                return null;
            }
            console.log("connected as id " + this.threadId);
            resolve(connection);
        });
    });
};
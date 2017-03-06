/**
 * Created by Carlos Leonardo Camilo Vargas Huamán on 3/5/17.
 */

'use strict';

var mysql = require("mysql");

class EmployeeEntity {
    constructor(connection) {
        this.connection = connection;
    }

    getEmployee() {
        return new Promise((resolve, reject)=> {
            this.connection.query('CALL sp_GetEmployee();', function (error, result, fields) {
                if (error) throw error;

                if (result[0].length == 0) {
                    resolve({
                        status: "ERROR",
                        message: "No existe usuario en Base de Datos"
                    });
                } else {
                    resolve({
                        status: "SUCCESS",
                        message: "User was found",
                        data: result[0]
                    });
                }
            });
        });
    }

    disconnect() {
        this.connection.end();
    }
}

module.exports.initEmployee = (connectionObject) => {

    return new Promise((resolve, reject) => {

        if (!connectionObject.host) throw new Error("A host must be specified.");
        if (!connectionObject.user) throw new Error("A user must be specified.");
        if (!connectionObject.password) throw new Error("A password must be specified.");
        if (!connectionObject.database) throw new Error("A database must be specified.");
        if (!connectionObject.port) throw new Error("A port must be specified.");

        let connection = mysql.createConnection({
            host: process.env.DATABASE_HOST || '127.0.0.1',
            user: 'users_service',
            password: '123',
            database: 'CHIRINOS',
            port: 3306
        });

        resolve(new EmployeeEntity(connection));

    });

};





/**
 * Created by Carlos Leonardo Camilo Vargas Huamán on 3/5/17.
 */

'use strict';
class Employee {
    constructor(connection) {
        this.connection = connection;
    }

    getEmployee() {
        return new Promise((resolve, reject)=> {
            connection.query('CALL sp_GetEmployee();', function (error, result, fields) {
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


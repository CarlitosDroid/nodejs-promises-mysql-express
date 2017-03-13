/**
 * Created by Carlos Leonardo Camilo Vargas Huamán on 3/12/17.
 */

'use strict';

class MeetingPlaceEntity {

    constructor(connection) {
        this.connection = connection;
    }

    getMeetingPlace() {
        return new Promise((resolve, reject)=> {
            this.connection.query('CALL sp_GetMeetingPlace();', function (error, result, fields) {
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

module.exports = (connectionObject) =>{
    return new MeetingPlaceEntity(connectionObject);
};






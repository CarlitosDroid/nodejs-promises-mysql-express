/**
 * Created by Carlos Leonardo Camilo Vargas Huamán on 3/5/17.
 */

'use strict';

module.exports = (app, employeeEntity) => {
    router.get('/', function (req, res, next) {

        employeeEntity.getEmployee().then((result)=>{
            res.status(200).send(result);
        });

    });
};




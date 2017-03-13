/**
 * Created by Carlos Leonardo Camilo Vargas Huamán on 3/5/17.
 */

'use strict';

module.exports = (app, employeeEntity) => {
    app.get('/employee', function (req, res, next) {

        employeeEntity.getEmployee().then((employeeResolve)=>{
            if(employeeResolve.data.length == 0){
                res.status(404).send(employeeResolve);
            }else{
                res.status(200).send(employeeResolve);
            }

        }).catch(next);
    });
};




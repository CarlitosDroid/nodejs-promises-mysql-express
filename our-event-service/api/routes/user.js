'use strict';

module.exports = (app, userEntity) => {
    app.get('/user', function (req, res, next) {

        userEntity.getUser().then((userResolve)=>{
            if(userResolve.data.length == 0){
                res.status(404).send(userResolve);
            }else{
                res.status(200).send(userResolve);
            }

        }).catch(next);
    });
};

/**
 * Created by Carlos Leonardo Camilo Vargas Huamán on 3/12/17.
 */

'use strict';

module.exports = (app, meetingPlaceEntity) => {
    app.get('/meetingPlace', function (req, res, next) {

        meetingPlaceEntity.getMeetingPlace().then((meetingPlaceResolve) => {
            if(meetingPlaceResolve.data.length == 0){
                res.status(404).send(meetingPlaceResolve);
            }else{
                res.status(200).send(meetingPlaceResolve);
            }
        }).catch(next);
    });
};


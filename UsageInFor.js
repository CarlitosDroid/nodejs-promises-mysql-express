/**
 * Created by Carlos Leonardo Camilo Vargas Huamán on 3/5/17.
 */

"use strict";

for (let i = 1; i <6; i++){
    setTimeout(function () {
        console.log("I've waited " + i + " seconds!");
    }, 1000 * i);
}

for (var j = 1; j < 6 ; j++){
    setTimeout(function () {
        console.log("I've waited " + j + " seconds for this!");
    }, 1000 * j);
}
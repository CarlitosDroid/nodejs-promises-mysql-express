/**
 * Created by Carlos Leonardo Camilo Vargas Huamán on 3/5/17.
 */

"use strict";

const polygot = {
    name : "Michel Thomas",
    languages : ["Spanish", "French", "Italian", "German", "Polish"],
    introduce : function () {
        console.log(this.name);
        /*const self = this;
        this.languages.forEach(function(language) {
            console.log("My name is " + self.name + ", and I speak " + language);
        });*/
    }
};

polygot.introduce();
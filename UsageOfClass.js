/**
 * Created by Carlos Leonardo Camilo Vargas Huamán on 3/5/17.
 */

"use strict";

class Food{
    constructor (name, protein, carbs, fat){
        this.name = name;
        this.protein = protein;
        this.carbs = carbs;
        this.fat = fat;
    }

    //to get `` symbol in ubuntu only use AltGr + Ç  (2 times)
    toString(){
        return `${this.name} | ${this.protein}g P :: ${this.carbs}g C :: ${this.fat}g F`;
    }

}

const chicken = new Food("arroz con pollo", 26, 0, 3);

console.log(chicken.toString());
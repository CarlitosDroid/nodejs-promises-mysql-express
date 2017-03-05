/**
 * Created by Carlos Leonardo Camilo Vargas Huamán on 3/2/17.
 */

class Point {
    constructor(x,y){
        this.x = x;
        this.y = y;
    }

    toString(){
        return "("+ this.x + ", " + this.y + ")";
    }
}




let point = new Point(5,6);
point.toString();

console.log(point.toString());
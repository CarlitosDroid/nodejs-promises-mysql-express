/**
 * Created by Carlos Leonardo Camilo Vargas Huamán on 3/5/17.
 */

//you have to use strict to try this in node
"use strict";
var foo = "foo";

function baz() {
    if(foo){
        var bar = "bar";
        let foobar = foo + bar;
    }

    ///Both foo and bar are visible here
    console.log("This situation is " + foo + bar + " .I'm going home.");


    try {
        console.log("This loge statement is " + foobar + "! It threw a ReferenceERror at me!");
    }catch (err){
        console.log("You got a " + err + "; no dice.");
    }

}

baz();
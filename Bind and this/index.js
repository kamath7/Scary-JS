//Exploring Bind,Call


//defining an object

var person = {
    name: 'Karen',
    occupation: 'Teacher',
    age: 23
};

function sayHello (greeting){
     //refers to person calling it
    console.log(greeting+" "+this.name+"!"); 
}
sayHello("Hello",person);//this say Hello Undefined. When called the this object will refer to the Global window object
sayHello.call(person,"Ola"); //this will force the sayHello's this to be pointed to person

//Using bind. Bind shall return function instead of a call
var sayHelloToKaren = sayHello.bind(person,"Namaste")(); //Here bind sets the value of this to person and returns a new function but doesn't invoke it!


//Source material for this 
/* 
    1) https://medium.com/@owenyangg/javascript-call-apply-and-bind-explained-to-a-total-noob-63f146684564
    2) https://www.youtube.com/watch?v=g2WcckBB_q0
    3) MPJ - Bind and this video


*/

let c1 = {
    x:5,
    y:10
};
let c2= {
    x:75,
    y:235
};

function printCoordinates (){
    console.log(this.x, this.y);
}


printCoordinates(); //this here is window object

let c1_func = printCoordinates.bind(c1)();
let c2_func = printCoordinates.bind(c2)();

//more bind

let crimeMasterGogo = {
    sound : 'Awoo',
    talk: function(){
        console.log(this.sound);
    }
};

crimeMasterGogo.talk(); //awoo

// let talkFunction = crimeMasterGogo.talk; //ceases to be a method but is just a function. and this.sound in crimeMasterGogo is no longer crimeMasterGogo
// talkFunction(); // will return undefined

let boundFunction = crimeMasterGogo.talk.bind(crimeMasterGogo);
boundFunction(); // will send out Awoo

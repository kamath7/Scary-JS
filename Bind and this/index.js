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

*/
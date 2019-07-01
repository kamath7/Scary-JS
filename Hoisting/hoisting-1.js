//Avoid hoisting because it slows the down browser
console.log(myFunc()); //Gives 10. Named function get hoisted on top of the file

function myFunc(){
    var a = 10;
    return a;
}
//declaring an anonymous function

console.log(a());
var a = function(){
    var b = 20;
    return b;
}
//difference between named and anonymous functions ->
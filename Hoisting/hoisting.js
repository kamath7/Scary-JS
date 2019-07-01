var a = "First";
var b = "Second";
var c = "Third";

console.log(a+ " "+ b + " "+c);
console.log(d); // undefined - Variable declared but nothing present. d is hoisted here. Only declarations first and no values are hoisted
var d= "Fourth";
console.log(d);// Fourth

e = "Fifth";
console.log(e);// Fifth
var e;

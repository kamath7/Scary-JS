const sayHelloInEnglish = (name)=>{ return ('Hello '+name)}; //shorter syntax


console.log(sayHelloInEnglish('mike'));

let add = function(a,b){
    let sum = a+b;
    console.log(sum);
    return false;
}
let addInArrow = (a,b)=>{console.log(a+b)}
add(2,3);
addInArrow(10,5);

//shorter syntax 1st advantage, next lines of code on lexical scoping and binding of this in arrow function
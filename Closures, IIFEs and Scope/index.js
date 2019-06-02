function greet(){
    var name = 'Mike';
    return function greetInSpanish(){
        return 'Ola '+name; //name can be accessed because greetInSpanish in is it's parent greet() scope
    }
}
name ='Albert';
console.log(greet()());

function calculate(){
    let a = 1;
    let b = 2;

    return function multiplication(){
        return a*b;
    }
}
console.log(calculate()());

/* 
Source 
a) https://itnext.io/a-beginners-guide-to-understanding-javascript-closures-b5eb57fdbeb4

*/
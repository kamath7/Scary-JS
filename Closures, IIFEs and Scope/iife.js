//IIFE - Immediately invoked function expression
(function runThis(){
    
    console.log('hello World!');
})();//this is a simple IIFe

(function greetMe(){
    let name = 'Joe';

    return function greetMeInSpanish(){
        console.log(`Ola ${name}`);
    }();
})(); //IIFE inside IIFE

/**
 * Source Material
 * a) https://medium.com/@vvkchandra/essential-javascript-mastering-immediately-invoked-function-expressions-67791338ddc6
 */
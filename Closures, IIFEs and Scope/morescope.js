//scope === variable access
//context === this

var a = 1; // a is on window scope(global access)

function bar(){
    var b = 2;
    var a=3;
    console.log(a); //gives 3
    //to get 1
    // console.log(window.a); //run this in a browser pls
}
bar();
console.log(a);

// console.log(b);//error. 

var x = 10;

function foo(){
    x = 55; //looks in the parent and looks up for x and changes it's value to 55

}
foo();
console.log(x);//x here gives 55
/**
 * Source material
 * a) https://www.youtube.com/watch?v=SBwoFkRjZvE
 * b) https://www.youtube.com/watch?v=iJKkZA215tQ
 */
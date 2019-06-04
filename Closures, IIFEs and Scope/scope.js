const message = 'Mushroom'; //const and let is block-access. 
console.log(message);// message here is globally accessed
function start(){
    const name = 'Teresa';
    if(true){
        const lname = 'May';


    }
    for (let i=0;i<5;i++){
        console.log(i); //i only valid here
    }
    console.log(lname); //not accessible
}
console.log(name); //not accessible

//local variables in a function are rated higher than global variables
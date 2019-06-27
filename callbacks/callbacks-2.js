function writeMath(callback){
    console.log("Math!");
    callback();
}
function writePhysics(callback){
    console.log("Physics!");
    callback();
}
function writeChemistry(){
    console.log("Chemistry");
    console.log("All done yay!");
};

writeMath(function(){
    writePhysics(function(){
        writeChemistry()
    });
}); //this is terrible. Promises and async/await are much better

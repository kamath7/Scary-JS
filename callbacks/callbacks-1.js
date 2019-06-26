
var btn = document.getElementById("someBtn");
btn.addEventListener("click",function(){
    alert("Hello World!");
    console.log("Hello World!");
});
// above is a callback function

//Another example

function playLevel(level,callback){
    setTimeout(()=>{
        console.log(`Playing level ${level}`);
        callback();
    },2000);
    
}
playLevel(1,function(){
    console.log("Level finished!");
});
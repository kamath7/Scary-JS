//Traditional promises
let promisetoeat = function(food){
    const isEaten = true;
    return new Promise((resolve,reject)=>{
        if(isEaten){
            resolve( `${food} consumed!`);
        }else{
            reject('Month end. No food :(');
        }
    });
};
// let consumeCola = function(){
//     return new Promise((resolve,reject)=>{
//         resolve('Cola also consumed!');
//     });
// };
// let letOutABurp = function(){
//     return new Promise((resolve,reject)=>{
//         resolve('Burrrrrrppppp!');
//     })
// };

// promisetoeat().then((message)=>{
//     console.log(message);
//     return consumeCola();
// }).then((message)=>{
//     console.log(message);
//     return letOutABurp();
// }).then((message)=>{
//     console.log(message);
// }).catch((errorMessage)=>{
//     console.log(errorMessage);
// });
promisetoeat('brains').then((message)=>{
    console.log(message);
}).catch((error)=>{
    console.log(error);
});

async function dostuff(){
    try{
        const response = await promisetoeat('Mushroom');

        console.log(response);
    }catch(err){
        console.log(err);
    }

}
dostuff();
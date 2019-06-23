let promisetoeat = function(){
    const isEaten = true;
    return new Promise((resolve,reject)=>{
        if(isEaten){
            resolve('Pizza consumed!');
        }else{
            reject('Month end. No food :(');
        }
    });
};
let consumeCola = function(){
    return new Promise((resolve,reject)=>{
        resolve('Cola also consumed!');
    });
};
let letOutABurp = function(){
    return new Promise((resolve,reject)=>{
        resolve('Burrrrrrppppp!');
    })
};

// promisetoeat.then((message)=>{
//     console.log(message);
// }).catch((errorMessage)=>{
//     console.log(errorMessage);
// });

promisetoeat().then((message)=>{
    console.log(message);
    return consumeCola();
}).then((message)=>{
    console.log(message);
    return letOutABurp();
}).then((message)=>{
    console.log(message);
}).catch((errorMessage)=>{
    console.log(errorMessage);
});

Promise.all([
    promisetoeat(),
    consumeCola(),
    letOutABurp()
]).then(()=>{
    console.log('Continue with your work!!');
});
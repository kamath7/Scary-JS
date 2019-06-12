//promises has two ends either it will be resolve or reject

let p  = new Promise((resolve,reject)=>{
    let a = 1+1;
    if(a === 2){
        resolve('Success!!');
    }else{
        reject('Failed');
    }
});

p.then((message)=>{
    console.log('Promise resolved',message);
}).catch((error)=>{
    console.log('Promise rejected',error);
});

const eatFood = new Promise((resolve,reject)=>{
    resolve('Food eaten!');
});
const drinkWater = new Promise((resolve,reject)=>{
    resolve("Water has been consumed!");
});
const ironClothes = new Promise((resolve,reject)=>{
    resolve("Clothes are ironed!");
});
//Below code waits for all promises to be run!
Promise.all([
    eatFood,
    drinkWater,
    ironClothes
]).then((message)=>{
    console.log(message);
});
Promise.race([ //will return only for the first one to return
    eatFood,
    drinkWater,
    ironClothes
]).then((messages)=>{
    console.log(messages);
});
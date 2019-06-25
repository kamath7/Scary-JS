function generateName(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('Emil');
        },2000);
    });
}
//Promise implementation
generateName().then((name)=>{
    console.log('Name',name);
}).catch((error)=>{
    throw new Error('Error. no name generated!');
})
//async-await implementation
async function message(){
    const msg = await generateName();
    console.log("Name",msg);
}

message();

//A more difficult one
function generateSchool(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(' studied in Sharada Vidhyalaya ');
        },2000);
    });
}

function generateAge(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('and is now 23 years old!');
        },2000);
    });
}
//promises implementation
generateName().then((name)=>{
    console.log(name);
    return generateSchool();
}).then((school)=>{
    console.log(school);
    return generateAge();
}).then((age)=>{
    console.log(age);
});


//async-await implementation
async function generateFullMsg(){
    const name = await generateName();
    const school = await generateSchool();
    const age = await generateAge();

    console.log(`${name}${school}${age}`);
}
generateFullMsg();
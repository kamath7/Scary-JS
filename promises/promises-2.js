const killTheDemon = new Promise((resolve,reject)=>{
    let demonKilled = false;
    if(demonKilled){
        var playerBenefits = {
            sword: 'Mighty Sword!',
            life: '200HP'
        };
        resolve(playerBenefits);     
    }else{
        reject('No sword for you sir!')
    }
});

// killTheDemon.then((message)=>{
//     console.log(message);
// }).catch((errorMsg)=>{
//     console.log(errorMsg);
// });

//promise chaining



var killmoredemonswithsword = function(playerBenefits){
    
        var msg = 'More demons killed with '+playerBenefits.sword+"Also gained "+playerBenefits.life;
        
        return Promise.resolve(msg);
    
};

var killdemons = function(){
    killTheDemon.then(killmoredemonswithsword).then((message)=>{console.log(message)}).catch((message)=>{console.log('No demons killed at all! :(')});
};
killdemons();




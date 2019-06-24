const rp = require('request-promise');

async function getInsult(){
    const response = await rp('https://evilinsult.com/generate_insult.php?lang=en&type=json');
    const response2 = await rp('https://example.com/')
    console.log(response);
    console.log(response2);

}

getInsult().then(()=>{
    console.log("Finished");
});
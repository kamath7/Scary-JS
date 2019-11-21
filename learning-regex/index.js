//Reference article
//https://medium.com/front-end-weekly/a-practical-beginners-guide-to-regex-regular-expressions-2faccbda117d
const myString = 'Hello. This is kams kams. Lots of timepass is done here';

console.log(myString.match(/kams/g)); //give all occurence where the string is kams
console.log(myString.match(/This is/g));//matching more than one

console.log(myString.match(/kams|timepass/g)) //matching words with either kams or timepass

console.log(myString.match(/Kams|Timepass/gi)) //matching words with either kams or timepass but with case insensitivity
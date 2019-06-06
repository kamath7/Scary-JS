const birthdayList = [
    {name: 'Mark',age: 23},
    {name: 'Mike',age: 25},
    {name: 'Jessica',age: 35},
    {name: 'Vineeth',age: 32},
    {name: 'Dale',age: 13}
];

// const totalAges = birthdayList.filter(function(user){
//     return user.age > 22;
// });
// console.log(totalAges);
// const getAges = totalAges.map(function(user){
//     return user.age;
// });
// console.log(getAges);

//using arrow function
const totalAges = birthdayList.filter(user=> user.age > 22);
console.log(totalAges);
const getAges = totalAges.map(user=>user.age);
console.log(getAges);
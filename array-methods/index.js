const people = [

    {name: 'Karl', income: 10000},
    {name: 'Kris', income: 1000},
    {name: 'Madara', income: 200000},
    {name: 'Ronaldo', income: 380},
    {name: 'Kuyt', income: 10020},
    {name: 'Skylar', income: 91800},
    {name: 'Maddison', income: 1002}
];

//Filter

const filterPeople = people.filter((person)=>{
    return person.income > 5000;
});
console.log(filterPeople);
//Map
console.log('-------');
const getNames = people.map((person)=> person.name);
console.log(getNames);

//find
console.log('-------');
const findSomeone = people.find((person)=> person.name === 'Skylar');
console.log(findSomeone);

//forEach
console.log('-------');
people.forEach((person)=>{
    console.log(person.name);
});

//some. If one item return true, this will return true
console.log('-------');
const isRich = people.some((person)=> person.income > 20000);
console.log(isRich);

//every. all item should be true, this will return true
console.log('-------');
const isEveryoneRich = people.every((person)=> person.income > 100000);
console.log(isEveryoneRich);

//Reduce
console.log('-------');
const totalIncome = people.reduce((total,person)=>{
    return person.income + total
},0);
console.log(totalIncome);

//Includes
console.log('-------');
const someNumbers = [1,2,3,6,69];
const doesArrayHave = someNumbers.includes(69);
console.log(doesArrayHave);

//Slice
//returns from begin and end(end not included). Original array will not be modified
console.log('-------');
const names = ['Ronaldo','Messi','Rooney','Neymar','Pirlo'];
console.log(names.slice(2));
console.log(names.slice(1,3));

//Splice
//changes contents of array by removing/replacing existing elements and adding new elements in place
console.log('-------');
let cricketNames = ['Dhoni','Kohli','Williamson','Chahal','Ab De Villiers'];
let newcricketNames = cricketNames.splice(2,1);
console.log(newcricketNames);

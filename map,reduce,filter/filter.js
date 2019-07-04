const numbers = [1,-2,-3,4,5,6];

const pnumbers = numbers.filter(function(value){
    return value >=0;
});
const siPnumbers = numbers.filter(value => value >=0);
console.log(siPnumbers);
console.log(pnumbers);

//Using strings
//Return restaurants that are open
const restaurants = [
    {name: 'Udupi Park',status:'Open'},
    {name: 'McDonalds',status: 'Closed'},
    {name: 'Midnight Eats',status:'Open'},
    {name: 'Faasos', status: 'Open'},
    {name: 'Firangi Bake',status:'Closed'}
];

const openRestaurants = restaurants.filter((item)=>item.status == 'Open');

console.log(openRestaurants);
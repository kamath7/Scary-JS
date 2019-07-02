var myVideoGames = [
    {name: 'Call Of Duty: Ghosts', genre: 'FPS'},
    {name: 'Battlefield V', genre: 'FPS'},
    {name: 'Age of Empires', genre: 'RPG'},
    {name: 'FIFA 17', genre: 'Sport'},
    {name: 'GTA V', genre: 'TPS'}
];

//Objective: to get video game names
// var vgNames = [];
// for (var i =0 ; i< myVideoGames.length; i++){

//     vgNames.push(myVideoGames[i].name);
    
// }
// console.log(vgNames);
var vgNames = myVideoGames.map((videogame)=>videogame.name+' is a game of genre '+videogame.genre); //using arrow functions and map
console.log(vgNames);
//map expects callback function to return a transformed object to put in the new array

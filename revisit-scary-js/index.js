//Reference article - https://medium.com/poka-techblog/simplify-your-javascript-use-map-reduce-and-filter-bd02c593cc2d

//map and forEach

const players = [{playerName: 'Robin Van Persie', role: 'Forward'},
                    {playerName: 'Wayne Rooney', role: 'Forward'},
                    {playerName: 'Paul Scholes', role: 'Midfielder'},
                    {playerName: 'Jaap Stam', role: 'Defender'},
                    {playerName: 'David De Gea', role: 'Goalkeeper'}];

//Retreiving player positions
const positions = [];
players.forEach((player)=> positions.push(player.role));
console.log(positions);

//Retrieving player names

const playerNames = [];
players.map((player)=>playerNames.push(`${player.playerName} played for Manchester Utd`));
console.log(playerNames);

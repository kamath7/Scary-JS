//Spread

//add elements of an existing array to a new array

var indianFood = ['Paneer Butter Masala','Naan','Aloo Mattar'];

var worldFood = ['Croquette','Borshch', ...indianFood];

console.log(worldFood);

//pass element of an array as arguements to a function
function addNumber(a,b,c){
    console.log(a+b+c);
}

var myNos = [1,2,3];
addNumber(...myNos);

//Copy array

var students = ["Kaami","Amar","Hari"];
var newStudents = [...students];
newStudents.push("Loki");
console.log(students);
console.log(newStudents);

//Concatenate Array
var arr1 = ["Loki","Ultron"];
var arr2 = ["Thanos","Black Order"]

var marvelVillains = [...arr1,...arr2];
console.log(marvelVillains);

//REST 
//Condense multiple elements into an array

function something(multiplier, ...elements){ // if the ... is used inside a function it will be treated as REST and not SPREAD operator
    return elements.map(element=>multiplier * element);
}

var arr69 = something(2,18,19,20);
console.log(arr69);
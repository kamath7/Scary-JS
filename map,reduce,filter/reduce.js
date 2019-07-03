var foodOrders = [
    {amount: 200},
    {amount: 500},
    {amount: 560},
    {amount: 530},
    {amount: 70}
];

//Find total
// var total= 0;

// for(var i =0 ; i< foodOrders.length; i++){
//     total += foodOrders[i].amount;
// }
// console.log(total)

var total = foodOrders.reduce(function(sum,order){
    console.log('Sum',sum,'Order',order);
    return sum + order.amount; // value passed over the next iteration
},0);// 0 here is the starting point

var simpleTotal = foodOrders.reduce((sum,order)=>sum+order.amount,0); //Using arrow functions
console.log(total);
console.log(simpleTotal);
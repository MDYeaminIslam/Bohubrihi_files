//Array iteration using foreach()
var food = ["Cake","Icecream","Chocolates","Bread"];
var number = [1,12,123,1334]


//!st parameter shows : Item
//2nd parameter shows:Index
//3rd parameter shows: Entire Array

food.forEach(function(value,value1){
    console.log(`Item ${value} and Index${value1}`);
});



//Array iteration using mapping
//map works similar as foreach()
//!st parameter shows : Item
//2nd parameter shows:Index
//3rd parameter shows: Entire Array

var foods = ["Cake", "Ice Cream", "Chocolates", "Bread"];
var numbers = [1, 32, 31, 2];


function addSomething(item) {
    return `${item} is a Food`;
}

let arr_res = foods.map(addSomething);
let arr_square = numbers.map(function(item){
    return item*item;
})

console.log(arr_res);
console.log(arr_square);

//Need to learn mapping and foreach() details from youtube or google
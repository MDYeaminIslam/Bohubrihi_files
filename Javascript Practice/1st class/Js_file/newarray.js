//Array iteration using foreach
//It's easier to iterate an array using foreach() than using for loop.
var foods = ["cake","Ice cream", "chocolates","Bread"];
var number = [1,3,7,28];

//1st parameter shows : Item
//2nd parameter shows : Index
//3rd parameter shows : Entire Array
foods.forEach(function(Item,Index,Arr){
    console.log(`Item is ${Item} and Index is ${Index} and Array is${Arr}`);
});


////Array iteration using map()
//map() has same parameter system 
//map() helps to generate new array from existing array using callback function .
//1st parameter shows : Item
//2nd parameter shows : Index
//3rd parameter shows : Entire Array
var foods = ["cake","Ice cream", "chocolates","Bread"];

function addSomething(Item){
    return `${Item} is a Food`;
}
var arr_res = foods.map(addSomething);
var number = [1,3,7,28];
var arr_square = number.map(function(item){
    return item*item;
});


console.log(arr_square);
foods.map(addSomething);


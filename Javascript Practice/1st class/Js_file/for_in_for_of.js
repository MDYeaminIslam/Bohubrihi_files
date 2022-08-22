//for in only works on array/string/objects
//for of only works on array/string

var name = "Hi I am a string";
var food = ["Pizza","pasta","burger","Noodles"];
//onject doesn't have index
var person = {
    name: "Shakibul Abedin",
    profession: "Cricketer",
    team: "Bangladesh",
    age: 35,
}

for(var key in person){
    console.log(key);
}
//After printing this we'll get only property of person objects
// // We will get index
// for(var x in name){
//     console.log(`Index ${x} and item ${name[x]}`);
// }

// // We will get items/values

// for(var x of name){
//     console.log(x);
// }

var food = ["Pizza","pasta","burger","Noodles"];
for (var y in food){
    console.log(y);
}
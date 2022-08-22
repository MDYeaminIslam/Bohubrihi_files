//Function
//Build In function
// alert();
// console.log();


// User define function 
//Declaration of function
function saySomething(){
    console.log("Hello ");
    console.log("I am learning JS");
    console.log("Form Bohubrihi");
}
//Execution of function
saySomething();

function sayName(parameter1){
    console.log(`Hi, Mr. ${parameter1}. Welcome to JS`);
}
sayName("Yeamin");

//return tyoe function
function addsum(num1,num2){
    return num1+num2;
}
console.log(addsum(100,200));

let a = (name) => 
{ return (age) => console.log(name, age) }
// Normal Declaration
function saySomething(name) {
    console.log('Hello ' + name);
}

//Function expression
var saySomething1 = function(name2){
    console.log("Hello " + name2);
}

// arrow function (ES6) 
var saysomething2 = (name2) => {
    console.log("Hello " + name2)
}



saySomething("sir");
saySomething1(" Yeamin ");
saysomething2(" Shakibul Islam");


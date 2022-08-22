 // console.log("Hello world");
 // document.write("Hello second world");

 // prompt is used to get input form the user and store it in a variable.
// var y;
 // y = prompt("Write down your name");
 // console.log(y);
 // document.write(y);
 // We can assign different value in same variable but it will work with latest one; for risk free play we can use different variable.
 // we can change variable value but we can't change constant value; 
 // var x =69;
 // let z = 89898;
/// let y2 =79;
/// console.log(x);
 // console.log(y2);
 // // let a; let b = a; a = 90; we can not initialize variable like this and it gives undifined. 

 // var value = 80;
 // var value2 = value;
 // var result = value + value2;
 // console.log(value);
 // console.log(value2);

 // var line1 = "Hello"
 // undefined
// // // // // // var line2 = "World"
 // undefined
/// line1 +" " +line2 
 // 'Hello World'
 // 56 + "hiii"
 // '56hiii'
 // "This going to " + 90 + " fun tonight"
 // 'This going to 90 fun tonight'
 // 79 + 90 + " Heiiii"
/// '169 Heiiii'

 // We can delete variable though they are in string system 
 // "90" - "10"
 // 80
 //But we can't add two string like normal addition and they act like cnoncatenate operation.
 // "90" + "10"
 // '9010'

// // // // // //NAN = is stands for Not a Number.

// // // // // // 4 ==4 
// // // // // // true
// // // // // // 4==9
// // // // // // false
// // // // // // 4!=6
// // // // // // true

// // // // // // 4 =="4" it happens because "==" ignore data taype and check if they are euqal or not.
// // // // // // true
// // // // // // 4 === "4" But "===" it check data type and value AudioScheduledSourceNode.
// // // // // // false

// // // // // // 4 !== 4
// // // // // // false
// // // // // // 4 != "4"
// // // // // // false
// // // // // // 4!=="4" those "!==" represents both are not equal in data type and value.
// // // // // // true

// // // // // //Objects
// // // // // //  var man = {name: "Yeamin",age :20, home:"Dhaka"}; 

// // // // // //Number 
// // // // // // we can store exponrntial number like this
// // // // // //  var number = 12e3

// // // // // // .tostring() & .toPrecision make any number into string  
// // // // // // or we can change its base number giving base like binary = 2,octal =8, decimal=10,hexadecimal =10; 
// // // // // // .toPrecision() helps us how to many number we want to show after point 
// // // // // //ParseINT() make any string into int value.  
// // // // // // we can write hexadeciaml number this way var number = 0*BB
// // // // // //if we want to make any number into int than we'll use parseINT() and want to make it float than use parseFloat() method.
// // // // // //isNaN() this method checks is the value is number or what?? If it is not number than it'll be return ture and vice versa
// // // // // // v= "hello woorld"
// // // // // // 'hello woorld'
// // // // // // isNaN(v)
// // // // // // true  

// // // // // // "hello world"
// // // // // // 'hello world'
// // // // // // 'Hello """ World'
// // // // // // 'Hello """ World'
// // // // // // var t = "This is called \"banana\" okk"
// // // // // // undefined
// // // // // // t
// // // // // // 'This is called "banana" okk'
// // // // // // h = "This is \nline"
// // // // // // 'This is \nline'
// // // // // // h = "This is \n line"
// // // // // // 'This is \n line'
// // // // // // h ="This is a very long meassage"
// // // // // // 'This is a very long meassage'
// // // // // // h.length
// // // // // // 28
// // // // // // here length works as property
// // // // // // j ="Bohubrihi"
// // // // // // 'Bohubrihi'
// // // // // // j[5]
// // // // // // 'r'

// // // // // // b = "abadfkld"
// // // // // // 'abadfkld'
// // // // // // c = b.toUpperCase(b)
// // // // // // 'ABADFKLD'
// // // // // // c
// // // // // // 'ABADFKLD'
// // // // // // B = "KDSJFK"
// // // // // // 'KDSJFK'
// // // // // // n = B.toLowerCase()
// // // // // // 'kdsjfk'
// // // // // // n
// // // // // // 'kdsjfk'

// // // // // trim() delete unnecesaary space at the front and end .
// // // // // b = " This is a sentance and we want toe write it clearly  "
// // // // // ' This is a sentance and we want toe write it clearly  '
// // // // // z = b.trim()
// // // // // 'This is a sentance and we want toe write it clearly'

// // // // Word = "This sentance is for slicing "
// // // // 'This sentance is for slicing '
// // // // sl = word.slice(2,3)

// // // // h = "This sentance is for slicing "
// // // // 'This sentance is for slicing '
// // // // h.slice(2,3)
// // // // 'i'
// // // // h.slice(2,7)
// // // // 'is se'

// // // sub string 
// // // v = "Paragraph is setteled"
// // // 'Paragraph is setteled'
// // // h = v.substr(3,4)
// // // 'agra'
// // // here sub string takes where from it takes vlaue and then how many charecter will it take.  

// // Replaceing value in the JS
// // v.replace("t","UllU")
// // 'Paragraph is seUllUteled'

// \\Concate the WebTransportBidirectionalStream
// VM3783:1 Uncaught SyntaxError: Invalid or unexpected token
// z = "Bangla"
// 'Bangla'
// z.concat(" Love","win", 1971)
// 'Bangla Lovewin1971'

// Array-1
// toy = ["Putul","car","cycle","waterGun"]
// (4) ['Putul', 'car', 'cycle', 'waterGun']
// toy[3]
// 'waterGun'
// toy[-1]
// undefined
// //changing index value 
// undefined
// toy[1]= "puzzle"
// 'puzzle'
// toy
// (4) ['Putul', 'puzzle', 'cycle', 'waterGun']
// //push() method enter new element at the end.
// undefined
// toy.push("watch")
// 5
// toy
// (5) ['Putul', 'puzzle', 'cycle', 'waterGun', 'watch']
// //pop() method will remove last element from the array
// undefined
// toy.pop()
// 'watch'
// //if we want to delete first element from the array
// undefined
// toy.shift()
// 'Putul'
// toy
// (3) ['puzzle', 'cycle', 'waterGun']
// //unshift() basically add new element at the front
// undefined
// toy.unshift("Putul","Watch")
// 5


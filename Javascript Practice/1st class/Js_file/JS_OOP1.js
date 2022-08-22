// //class(ES6)
// //Class is a template for creating objects.
// //Example of objects
// let person1 = {
//     fname: "Fazle",
//     lname: "Rahat",
//     dob: "11-13-1996",
    
//     fullname: function(){
//         console.log(`${this.fname} ${this.lname}`);
//     }
// }

// let person2 = {
//     fname: "Md Yeamin",
//     lname: "Islam",
//     dob: "11-13-1998",
    
//     fullname: function(){
//         console.log(`${this.fname} ${this.lname}`);
//     }
// }

// console.log(person1);
// console.log(person2);

//Here we are going to create a class for creating ojects]

// class Person{
//     constructor(){
//         this.firstName = "Yeamin"; //this is a property of objects
//         this.lastName = "Islam";
//         this.dob = "22-10-1999";

//     }
// }

// //Now we going to create objects of Person class 
// let Person1 = new Person();
// console.log(Person1);

//Now we are going to create a class for creating objects of person class with parameters.
//passing parameters to the class constructor
class Person{
    constructor(fname,lname,dob){
        //"this.firstName" this is property and "fname" is a value
        this.firstName = fname; //this is a property of objects
        this.lastName = lname;
        this.dob = dob;

    }
}

//Now we going to create objects of Person class 
let Person1 = new Person("Mominu","Islam","22-2-1998");
let Person2 = new Person("Fazle","Islam","22-2-1980");
let Person3 = new Person("Rabeya","Khatun","10-7-1990");

console.log(Person1);
console.log(Person2);
console.log(Person3);

//with extra methods
// class Person {
//     constructor(fname, lname, birthday) {
//         this.firstname = fname;
//         this.lastname = lname;
//         this.dob = birthday;
//     }
        //this is called methods
//     calculateAge() {
//         let birthday = new Date(this.dob);
//         let diff = Date.now() - birthday.getTime();
//         let ageDate = new Date(diff);
//         return Math.abs(ageDate.getUTCFullYear() - 1970);
//     }

//     fullname() {
//         console.log(this.firstname, this.lastname);
//     }

// }

// let person1 = new Person("Fazle", "Rahat", "11-13-1988"); 
// let person2 = new Person("Moinul", "Islam", "02-11-1991");
// let person3 = new Person("Rony", "Chy", "01-17-1996");

// console.log(person1.calculateAge());
// console.log(person2.calculateAge());
// console.log(person3.calculateAge());

//accessong fullname() method of class person1
// console.log(person1.fullname());
// console.log(person2.fullname());
// console.log(person3.fullname());
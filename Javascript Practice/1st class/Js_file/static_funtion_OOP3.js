//static function
//we can call static function without creating objects of class
//and we have add class name than give dot and than static function name;
//but in the normal class method we have to create an object of class and then called the method.

// Static Function

class Person {
    constructor(fname, lname) {
        this.firstname = fname;
        this.lastname = lname;
    }

    greeting() {
        console.log(`Hello ${this.firstname} ${this.lastname}!`);
    }

    static test() {
        console.log("I am staic!");
    }
}

let person1 = new Person("Simanta", "Paul");

console.log(person1.greeting());
console.log(Person.test());
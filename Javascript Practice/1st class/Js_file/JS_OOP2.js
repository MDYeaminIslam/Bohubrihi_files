//Sub class
//Inheritance

//Base class
class person{
    constructor(fname,lname){
        this.firstName = fname;
        this.lastName = lname;
    }
    //declaring a method
    greeting(){
        return (`Hello ${this.firstName} ${this.lastName}!`);
        
    }
}
//customer is a subclass of person class
//customer is inherited the class person that's why we have to
//include person class's constructor parameter in customer class constructor parameter/
//sub class/ child class
class customer extends person{
    constructor(fname,lname,phone,membership){
        super(fname,lname);//this super() make a link between parent class(person) ans child class(customer).
        this.phone = phone;
        this.membership = membership;
    }
}

let person1 = new person("Abdullah","Khane");
console.log(person1);
console.log(person1.greeting());
//we have to pass parent class constructor parameter + child class constructor paramerters
let customer1 = new customer("Sharif","Islal","018070780","080iodhifo0");
console.log(customer1);
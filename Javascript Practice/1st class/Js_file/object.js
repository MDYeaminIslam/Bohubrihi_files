//Object Method
//if we want to use a function inside a Object and 
//also get access of own property of object then we use Object Method and "this" key word.
//JS think everything as a object  

var person = {
    // Property : "PropertyValue"
    firstName: "Md Yeamin",
    lastName: "Islam",
    DOB: "22-10-1999",
    // We have seen number,string,date,array,oject as property value
    fullName : function(){
        return `${this.firstName} ${this.lastName}`;
    }

 }

 console.log(person.firstName);
 console.log(person.fullName());

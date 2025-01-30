// Objects - It is a collection of key-value pairs that generally we declare it inside a curly braces {} - Key-value , can be of any data type, it can also consists of functions

// Ex:- {name : "John", age : 34} - JSON

// ClassName obj = new ClassName() - Java

// 1. Object Literals - {key:value}
// 2. Constructor Function - function FunctionName(){this.}
// 3. Class style - new ClassName()
// 4. Factory function - A function which return an object - Not so common 


// 1. Object Literals - We have to use {key:value}
// Syntax
/*

let obj = {
    key1 : value1,
    key2 : value2,
    key3 : value3,
    methodName : function(){}
}

obj.key1
obj.methodName

key - We have to define by just the name (text value - Example - city, age, printInfo, address)
value - Can be any data type, it can also be a function.



*/

let person = {
    name : "John", 
    age : 34, 
    city : "NY", 
    Occupation : "Engineer",
    printInformation : function(){
        console.log(this.name, this.age, this.city);
    }
}
console.log(person.name);
console.log(person.Occupation);
person.printInformation()

console.log(person["city"]);

let data = {
    url : "https://google.com/",
    username : "Username",
    password : "Password",
    login : function(){
        console.log("Login Successfully");
        console.log(this.username, this.password);
    }
}

console.log(data.url);
data.login()


// 2. Constructor Function 

/*
function ConstructorName(param1, param2){
    this.propertyName1 = param1;
    this.propertyName2 = param2;
}

const object = new ConstructorName(param1, param1)
object.propertyName1
object.propertyName2


*/

function Car(make, model, year, noOfSeats){
    this.make = make; // make = "Toyota"
    this.model = model; // 
    this.year = year;
    this.noOfSeats = noOfSeats;
    this.printCarInfo = function(){
        return (this.make, this.model, this.year, this.noOfSeats);
    }
}

const myCar = new Car('Toyota', 'Corolla', 2020, 5);
console.log(myCar);
console.log(myCar.make) // Accessing the make property
console.log(myCar.noOfSeats);
console.log(myCar.printCarInfo())

const myCar1 = new Car('BMW', 'I7', 2024, 7);
console.log(myCar1.make) // Accessing the make property
console.log(myCar1.noOfSeats);


let i =10
function greet(){
    console.log("Hello")
}



// 3. Class Style - 2015 (ES - 6)
// class keyword is used to define a class in JavaScript
// class is a blueprint for creating objects

// Syntax:-
/* 
class ClassName {

    constructor(param1, param2) {
        this.propertyName1 = param1;
        this.propertyName2 = param2;
    }

    functionname(){}

    name = "JS"
}

const obj = new ClassName(param1, param2)

*/

class CarClass {
    name = "Car";
    constructor(make, model, year, noOfSeats) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.noOfSeats = noOfSeats;
    }

    start() {
        console.log("Car Started");
    }

    static stop(carInstance) {
        if (carInstance instanceof CarClass) {
            console.log(carInstance.year); // Access instance property
        } else {
            console.log("Invalid instance provided.");
        }
    }
}

// Example usage:
const myCar2 = new CarClass("Toyota", "Corolla", 2020, 5);
myCar2.start();


// Call the static method and pass the instance
CarClass.stop(myCar2); // Output: 2020


const carClass = new CarClass("Audi", "Q3", 2024, 6)
console.log(carClass);



console.log(carClass.name);
console.log(carClass.make);

//carClass.stop()
CarClass.stop()
carClass.start() 

// 4. Factory function
// Factory function is a function that returns an object. It is used to create objects. It is
// similar to a constructor function but it does not use the new keyword. It is used to
// create objects without using the new keyword.

// Syntax - 
/*
function factoryFunctionName(){
// code to create object
return object;
}

const obj = factoryFunctionName()

*/

function PersonInfo(name, age, city){
    return {
        name: name,
        age: age,
        city: city
    }
}

const pinfo = PersonInfo("JS", 20, "NY")
console.log(pinfo)
console.log(pinfo.name);











// Function

// public int myFunction() {....}

//function functionName(parameter, parm1, param2) {// Your code logic here)}

// Function Declaration - Argument, return
// Function Expression - 

// There are 2 tyoes of functions in JS
// 1. Named function (Function Declaration)
// 2. Anonymous function (Function Expression)  
    // 1. Anonymous function
    // 2. Arrow function

// 1. Named Function (Function Declaration) - A function which will be declared along with the name of the function.
// Syntax:
/*

function functionName(param1, param2) {
  // function body
}

*/


//1. Non-parametrised function (non returning)
function myFunction() {
    console.log("Welcome to JS function")
}

myFunction()

// 2. Parametrised function (non returning)
function greet(name, age){ //name - Argument
    console.log("Hello, ", name, "You are of age", age);
}

greet("John", 40) //John - Parameter

// 3. parameterised function along with return keyword
// Addition of 2 numbers
function addition(a,b){
     return c = a+b;
    // return c // return 10+30 // return 40
}

let sum = addition(10,30)
console.log(sum) // 40  

console.log("*********************************************");

// 2. A. Anonymous Function - Function Expression - Unnmaed function 

// Syntax:-
/*

let varaible = function(param1, param2){
.........
}

varaible()

*/


let add = function(a,b){
   // console.log(a+b);
   return a + b
}

let sum1 = add(10,-40) // 40
console.log(sum1) // 40

// 2. B - Arrow Function - => (Fat pipe symbol OR Arrow symbol)
// Syntax:-
/*
let variable = () => { return }

let variable = (a,b) => a+b
// 

*/

let variable =  (a,b) => {
    let c = (a+b)
    return c;
}


let sum2 = variable(5,6)
console.log(sum2) // 11


// Constructor Function - this
// What is the definition
// A function that is used to create an object is called a constructor function.

// myFunction()
// MyFunction()
//SYntax:-
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
}

const myCar = new Car('Toyota', 'Corolla', 2020, 5);
console.log(myCar.make) // Accessing the make property
console.log(myCar.noOfSeats);

const myCar1 = new Car('BMW', 'I7', 2024, 7);
console.log(myCar1.make) // Accessing the make property
console.log(myCar1.noOfSeats);












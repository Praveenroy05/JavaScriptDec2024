// Which store a value

// var
// let
// const

// var

// Syntax 
// var variableName = value
// let variableName = value
// const variableName = value

// scope of variable
/*

1. global variable
2. local variable - Function / block of code {}

*/

//Example
var i = "10" // global
i = 45.8
// 1. Scope - Global or Functional(Function) 
// 2. Variable declared using var can be redeclared and reinitialsed.
// 3. It is not mandatory to initialize the variable at the time of declaration

var a;
a = 10;


i = 40 // reinitlisation

var i = 50
var i = 100
var i = true
var i ='TS'
console.log("line # 33", i)


function varKeyword(){
    var m = 20 // local
    console.log(i)
}
//console.log(m);


// disadvantage of var
var name = "Java" // global

if(5>1){
    var name = "Python"
    console.log("inside block ", name);
}
console.log("line number 40", name);

// var  - modern JS we do not use this keywrod to declare a variable

// ES 6 - ESCA SCRIPT 6 (2015)
// let and const



let j = 50 // global
if(5>3){
    var k = 100 // local
}
console.log(i)
console.log(k)


//const k = true

let f 
f =" JS"
// let - 
// 1. scope will be  - blocked scope {}
// 2. reinitialisation is allowed but redeclaration is not allowed
// 3. It is not mandatory to initialize the variable at the time of declaration

// const  - Use declare a variable which is constant in nature
// 1. scope will be  - blocked scope {}
// 2. reinitialisation and redeclaration both are not allowed
// 3. It is mandatory to initialize the variable at the time of declaration

const a = 25; // constant


console.log("Line #78", j);
if(10>6){
    let b = 100 // local
    console.log("Inside the block", b);
}
console.log("line # 83", b);

let c 
c = "JS"

let d = 20
// let d = 30





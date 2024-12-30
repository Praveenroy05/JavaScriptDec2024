// Loops will execute the same block of multiple times

console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.log(5)

console.log("********************");

    
// 1. for loop - If we know how many times we have the run the iteration
// 2. while loop - If we don't know how many times we have to run the iteration
// 3. do while loop - If we want to run the loop at least once
// 4. for of loop - This loop used to iterate over iteratable object - Array, string etc etc
// 5. for in loop - is used to iterate over propeties of an object in jS - {name: "JS", age : 30}

// 1. for loop - Traditional for loop
// Syntax:

/*

 for (initialization; condition; increment/decrement) {
     // code to be executed
 }

initialization - initiliase the variable to start the execution. Ex - let i=0, i++
condition - condition to check whether the loop should continue or not. Ex - i<5
increment/decrement - increment or decrement the variable after each iteration. Ex - i++

*/

for(let i=1; i<=5; i++){// i=1 1<=5; 1++ 1+1 = i=2, i=5 i=6
    console.log(i)  // 1 2 3 4 5
}

console.log("********************");

// while loop - 
// Syntax:

/*
// initiliase the value of a variable
 while (condition) {
     // code to be executed
     increment/decrement
 }

*/

let j=1 //
while(j<=5){ // j=6
    console.log(j)
    j++ 
}

console.log("********************");

// do while loop
// Syntax:-

/*
initialization
do {
     // code to be executed
     increment/decrement
 } while (condition);

*/

let k =1
do{
    console.log(k)
    k++
}while(k<=0);

console.log("********************");

// for ... of loop

let array = [1, "JS", "pink", true] // [0:1, 1:"JS", 2:"pink", 3:true]
console.log(array[2]);

// for(let i=0; i<array.length;i++){
//     console.log(array[i]) // array[3]
// }

// Syntax: - 
/*

for (variable of iterable) {
console.log(variable);
}

for(i of array){
    console.log(i)
}


*/

for(e of array){
    console.log(e);
}
console.log("**************************************");
//for in loop - is used to iterate over propeties of an object in jS - {name: "JS", age : 30}

let person = {name : "John", age : 34, city : "NY"}
// console.log(person.city);
// console.log(person["city"]);

// Syntax
/*

for (variable in object) {
    console.log(variable); // Key of an object
    console.log(object[variable]); // Value of the object)
}

*/

for(let key in person){
    console.log(key)//rson[key]);
    console.log(person[key]); // person["name"]

}


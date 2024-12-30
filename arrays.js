// array
 let i = 10
// let array = [1, 2, 3, 4, 5] // [0:1, 1:2, 2:3, 3:4, 4:5]- 0-based


// There are 2 ways to declare array in JS
// 1. Array Literal
let array = [] 
array[0] = 1
array[1] = 2
array[2] = 3
array[3] = 4
array[4] = 5
console.log(array);

let numericArray = [10,20,30,50,70]  // [0:1, 1:2, 2:3, 3:4, 4:5]- 0-based
console.log(numericArray);

// 2. Array Constructor
let array1 = new Array(1,2,3,4,5) //[1,2,3,4,5]
console.log(array1); 
console.log(Array.isArray(i)); 

let stringArray = ["Apple", "Pink", "Blue", "Banana"]
let mixedArray = ["Apple", 42, true, null, undefined] // [0-4] - 5
mixedArray[0] = "Orange"

console.log(stringArray);
console.log(mixedArray);
console.log(mixedArray[2])

// length - size of an array 
console.log(mixedArray.length);   

for(let i=0; i < mixedArray.length; i++){
    console.log(mixedArray[i])
}

console.log("********Methods of array in JS **************")

let array2 = [1,2,"blue", "orange", true, 12.90]
console.log(array2);

//1. push(value) -
// Syntax - 
// arrayname.push(value1, value2, value3, value4, value5, value6)
// adds one or more elements to the end of an array and returns the new length of the array
array2.push(50,"Red", "Car")
console.log(array2);

// 2. pop() - removes the element from the end of an array
// Syntax - arrayname.pop()
array2.pop()
console.log(array2);

// 3. unshift(value) - Add the elements at the beginning of an array
// Syntax - arrayname.unshift(value1, value2, value3, value4, value5)
array2.unshift(100, "Green")
console.log(array2);

// 4. shift() - removes the element from the beginning of an array
// Syntax - arrayname.shift()
array2.shift()
console.log(array2);

let array3 = [1,2,3,4,5,6,7,8]
console.log(array3);

// 5. splice() - 
// Syntax - arrayname.splice(startindex, howmany, item1, item2, item3,)
// startindex - the position where you want to add the item(s)
// howmany - the number of items you want to delete
// item1, item2, item3 - the items you want to add

array3.splice(2, 3, "Apple", "Banana")
console.log("Splice", array3);
// [ 1, 2, 3, 'Apple', 'Banana', 4, 5, 6, 7, 8 ]

// 6. slice()
// Syntax - arrayname.slice(startindex, endindex) // [0,4]
const sliceResult = array3.slice(0,5) // 0..4
console.log(sliceResult); 

// 7. toString() - convert the array into string
// Syntax - arrayname.toString()
const arrayToString = array3.toString()
console.log(arrayToString);
console.log(array3.toString());

let array4 = [1,2,3,4,2,3,5]
// 8. indexOf(value) - 
// Syntax - arrayname.indexOf(value)
// returns the index of the first occurrence of the specified value
console.log(array4.indexOf(3)); // 1

const index = array4.indexOf(3) // 1
console.log(index);

// forEach(), map(), filter(), reduce(), some() and every()

let fruitsArray = ["apple", "banana", "orange", "mango"]

// forEach(fn) - 
// Syntax : - arrayname.forEach(function(currentValue, index, arrayname){...})

// It calls a function on each element of the array.
// currentValue - The current element being processed in the array
// index (Optional) - The index of the current element being processed in the array
// arrayname(Optional) - The array the current element belongs to.


fruitsArray.forEach(function(a){
    console.log(a); //  
})

for(let i=0; i < fruitsArray.length; i++){
    console.log(fruitsArray[i])
}

let mapArray = [1,2,3,4,5] // 1*1, 2*2 ..... //15
// map(fn) - Creates a new array 
// Syntax : - arrayname.map(function(currentValue, index, arrayname){...})

for(let i=0; i < mapArray.length; i++){
    console.log(mapArray[i]* mapArray[i])
}

let square = mapArray.map(function(number){
    return number **2 // [1, 4, 9 ...]
})
console.log(square); // [1, 4, 9, 16, 25]


// filter(fn) - Create a new array but will return us only those values which passes the function
// Syntax : - arrayname.filter(function(currentValue, index, arrayname){...})

let oddNumber = mapArray.filter(function(number){
    return number >0
})
console.log(oddNumber); // [2, 4]

// reduce(fn) - 
// Syntax : - arrayname.reduce(function(accumulator, currentValue, index, arrayname){...}, initialValue(optional))


let reduceArray = [1,2,3,4,5] // 1*1, 2*2 ..... //15


let sum = 0
for(let i=0; i<reduceArray.length ; i++){
    sum = sum + reduceArray[i] // 1*1 = 1*2 = 2*3 = 6
}
console.log(sum); // 15

let sumOfArray = reduceArray.reduce(function(sum, number){
    return sum + number
})
console.log(sumOfArray); // 15

//some() and every()

// some(function) - Return us the value as true or false - if at least one element passes the fucntion true, if none - false
// Syntax - 
// arrayname.some(function(currentValue, index, arrayname){...})

const someResult = reduceArray.some(function(number){
    return number >=5
})
console.log(someResult); // false



//let reduceArray = [1,2,3,4,5] // 1*1, 2*2 ..... //15


// every(function) - Return us the value as true or false - if everyelemnet passes the fucntion true else false

const everyResult = reduceArray.every(function(number){
    return number >0
})
console.log(everyResult); // false







// Operators  - 

// 1. Arithmetic OP - 
// 2. Comparison OP -
// 3. Logical OP -
// 4. Assignment OP -

// 1. Arithmetic OP - An operator which performs mathematical operations
    // 1. Addition - +
    // 2. Subtraction - -
    // 3. Multiplication - *
    // 4. Division - /
    // 5. Modulus - %
    // 6. Exponentiation - **
    // 7. Increment Op - ++
    // 8. Decrement Op - --

let a = 10
let b = 20
// +  - Number (add the 2 numbers)
console.log(a + b); // Output: 30 - 10+20
// + - String datatype (concatination)
console.log("Hello " + "World"); // Output: Hello World
// -  - Number (Subtract the 2 numbers)
console.log(a - b); // Output: -10 - 10-20
// *  - Number (Multiply the 2 numbers)
console.log(a * b); // Output: 200  - 10*20
// /  - Number (Divide the 2 numbers)
console.log(10 / 4); // Output: 0.5 - 10/20  - 0.5

// Modules % - 10/4 - 2.5 , 10%5  - 0 - 13
console.log(10 % 4); // Output: 2 - 10/4 -

// Expontential - **
// a**b - a^b = 2**3 - 2^5 - 2*2*2*2*2
console.log(9 ** 3); // 9*9*9 = 729

// ++ - Increment OP - +1 = a = 10; a++ = a+1 ++a = a+1

// Pre-increment - Action will be perform after the value will be increment

let c =10 // (++c) // c++
console.log(++c); // Output: 11 - 10+1

// ++ Post- increment - Action will be perform first and then the value will be incremment
let d = 10
console.log(d++); // 10
console.log(d); //11

// Comparison Operators - Returns the result in the form of boolean (true or false)
// 1. Equal to - ==
// 2. Not Equal to - !=

// 3. Greater than - > (10>5) && (10>4)
// 4. Less than - < (1<5)
// 5. Greater than or Equal to - >= (10>=5)
// 6. Less than or Equal to - <= (10<=10)

// 7. Strict Equal to - ===
// 8. Strict Not Equal to - !==

// == - 
let e = 20 // number
let f = '20' // string
console.log(e == f);  // 20 == 20 
console.log(e === f); // 

let g = 10
let h = '10'
console.log(g != h);   
console.log(g !== h); 

console.log(10>5);
console.log(1<5);
console.log(10>=10);
console.log(10<=10);
console.log("****************** Logical OP******************");
// Logical Operators - Boolean expresion
// 1. AND - &&
// 2. OR - ||
// 3. NOT - !

// && - AND - Both of condition are true then it will return true

// true && true - true
// true && false - false
// false && true - false

console.log((10>5) && (7>8)); // true && false - false
console.log((10>5) && (7>6)); // true && true - true

// || - OR - If any of the condition is true then it will return true value
// true || true - true
// true || false - true
// false || true - true
// false || false - false

console.log((10>5) || (7>8)); // true || false - true
console.log((10<5) || (7<6)); // false && false - false

// ! (NOT) - Reverse the boolean value
// !true - false
// !false - true
console.log(!(10>9));

console.log("***************************")
// Assignment OP
// 1. = - Assignment (=)
let k = 10
// +=, -=, *=, /=, %=

// += - It will add the value of the variable and then assign the value to same variable

//k = k+5 // K = 10+5 // k=15
k %= 4 // K = K%4 // k= 10%4 = 2
console.log(k); // 15

let l = -50
l -=10 // l = l-10 l = -50-10, l =-60
console.log(l); // -60











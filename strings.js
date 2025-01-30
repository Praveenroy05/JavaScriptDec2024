// String - Sequence of characters
// This is a word

// String 
// 1. By using double quote (" ")  - string literal

let str = "Welcome to JS";

// 2. By using single quote (' ') - string literal

let str1 = 'Welcome to JS';

// 3. Template literal (` `)
// 1. It is used to insert the value of a variable inside a string.
let name1  = "John"
const age = 30
const greet = `Welcome, ${name1} , you are of ${age}?`
console.log(greet);

let str2 = `This, is a string.` // 0:T, 1:h 2:i.......

// 1. length
// It is used to get the length of a string.
console.log(str2.length);

// 2. charAt(index) - Return the character at the specified index

// Syntax
// stringname.charAt(index) - 
console.log(str2.charAt(19)); // 

const index = str2.charAt(4)
console.log(index);

// 3. concat(string1, strn2.....)
// return a new string after concatinating all the string
// Syntax
// stringname.concat(string1, string2, string3.....)

let str3 = "Hello"
let str4 = " World"
let str5 = " JavaScript"
const concatString = str5.concat(str4, str3) // Hello + World + Javascript
console.log(concatString);

// 4. includes(string) - Check if a string contains the specified string that we have inside includes method. It will return the result in boolean format (true or false)
// Syntax
// stringname.includes(string)

let string6 = "This is a JS"

const includesResult = string6.includes("Java")
console.log(includesResult); 

// 5. startsWith(string) - 
// Syntax
// stringname.startsWith(string)

console.log(string6.startsWith("J"));
console.log(string6.startsWith("T"));

// 6. endsWith(string) - true or false

console.log(string6.endsWith("JS"));
console.log(string6.endsWith("S"));

// 7. indexOf("character") 
// It is used to get the index of the first occurrence of the specified character in a string.
// Syntax
// stringname.indexOf("character")
console.log(string6.indexOf("is"));

// 8. lastIndexOf("char/str")
// It is used to get the index of the last occurrence of the specified character in a string.
// Syntax
// stringname.lastIndexOf("character")
console.log(string6.lastIndexOf("is"));

// 9. replace(searchValue, newValue) - 
// It is used to replace the specified value with the new value in a string.
// Syntax
// stringname.replace(searchValue, newValue)
console.log(string6);
console.log(string6.replace("JS", "Python"));

// 10. split(separator)
// It is used to split the string into an array of strings based on the specified separator.
// Syntax
// stringname.split(separator)

let string7 = "This is a JS session"
console.log(string7.split("i"));
console.log(string7.split("@"));


// 11. slice(startIndex, endIndex)
// It is used to extract a part of the string and return it as a new string.
// Syntax
// stringname.slice(startIndex, endIndex)
let string8 = "This is a JS session"
console.log(string8.slice(0, 7));

// 12. toUpperCase() - Convert the string into uppercase
// 13. toLowerCase() - Convert the string into lowercase

console.log(string8.toUpperCase())
console.log(string8.toLowerCase())

// 14. trim()  - Removes the whitespace from the beginning and end of the string

let string9 = "       This is a string   "
console.log(string9)
console.log(string9.trim())













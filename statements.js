// This is a statement

// statement or condition

// if statement
// if else
// if else if - Nested if else
// switch 

// if  - 
// Syntax : - if(condition){....}
// if condition is true then execute the code inside the if block

if(5>8){ // true or false
    console.log("5 is greater than 3");
}

// if else
// Syntax : - if(condition){....} else{.....}
// if condition is true then execute the code inside the if block
// if condition is false then execute the code inside the else block

if(10>20){ // true or false
    console.log("10 is greater than 20");
}
else{
    console.log("10 is not greater than 20");
}

// if else if - Nested if else

// Syntax : - if(condition1){....} else if(condition2){....} else if(condition3){.....}
// if condition1 is true then execute the code inside the if block
// if condition1 is false then check condition2 if true then execute the code inside the if block

let marks = 45;


    if(marks >=90){
        console.log("A");
    }
    else if(marks >=70){
        console.log("B");
    }
    else if(marks >=50){
        console.log("C");
    }
    else{
        console.log("FAILED");
    }



let browser = "chrome"

if(browser == "chrome"){
    let browser = "some browser"
    console.log("Browser is chrome");
    console.log(browser);
}else if(browser == "firefox"){
    console.log("Browser is firefox");
}else if (browser == "safari"){
    console.log("Browser is safari");
}else{
    console.log("Browser is not supported");
}

console.log(browser);





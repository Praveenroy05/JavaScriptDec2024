


function convertDDMMYYToDDMMMYYY(){
const inputDate = "01/12/2024"; // Input date in DD/MM/YYYY format

// Split the input and map month to short form
const [day, month, year] = inputDate.split("/");
const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const formattedDate = `${day} ${monthNames[month - 1]} ${year}`;

console.log(formattedDate); 
}

convertDDMMYYToDDMMMYYY()



// Node js
// VS code

// We require 2 pre:
//1. Node js
// 2. VS code
// 3. playwright env
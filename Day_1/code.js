//THE SWAPPER
let a = 5;
let b = 10;

let temp = a;
a = b;
b = temp;

console.log("a:", a); 
console.log("b:", b); 





// TYPE CHECKER
function checkType(input) {
  if (typeof input === "number") {
    console.log("This is a number");
  } else if (typeof input === "string") {
    console.log("This is a string");
  }
}

checkType(42);      
checkType("hello"); 


// INITIALS CREATOR
let fullName = "John Doe";

let initials = fullName[0] + fullName[fullName.indexOf(" ") + 1];
console.log(initials); // "JD"





//THE CLEANER
let messy = "   Javascript is fun   ";

let clean = messy.trim().toLowerCase();
console.log(clean); 





//THE GROCERY LIST 
let cart = ["Bread", "Butter", "Juice"];

cart.push("Milk");       
cart.unshift("Eggs");    
cart.pop();              

console.log(cart);






// VALUE FINDER 
let numbers = [10, 20, 30, 40, 50];

console.log(numbers.includes(30)); 
console.log(numbers.indexOf(50));  
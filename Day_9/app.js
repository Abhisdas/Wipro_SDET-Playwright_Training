// variables and data types
// 1. Create a program that swaps two numbers without using a third variable.
let a = 10;
let b = 20;

a = a + b;
b = a - b;
a = a - b;

console.log("After Swap:");
console.log("a =", a);
console.log("b =", b);

// 2. Write a program to check whether a given value is a number, string, boolean, null, or undefined.
let value = null;

if (value === null) {
    console.log("Type is null");
} else {
    console.log("Type is", typeof value);
}

// 3. Convert temperature from Celsius to Fahrenheit using variables.
let celsius = 37;
let fahrenheit = (celsius * 9/5) + 32;

console.log("Temperature in Fahrenheit =", fahrenheit);

// 4. Create a simple calculator using variables and arithmetic operators.
let num1 = 20;
let num2 = 5;

console.log("Addition =", num1 + num2);
console.log("Subtraction =", num1 - num2);
console.log("Multiplication =", num1 * num2);
console.log("Division =", num1 / num2);
console.log("Modulus =", num1 % num2);

// 5. Write a program that takes a user’s birth year and calculates age.
let birthYear = 2003;
let currentYear = 2026;
let age = currentYear - birthYear;

console.log("Age =", age);


// Strings
// 1. Reverse a string without using built-in reverse methods.
let str = "JavaScript";
let reversed = "";

for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
}

console.log("Reversed String =", reversed);

// 2. Count the number of vowels in a string.
let text = "Abhishek Das";
let count = 0;

for (let i = 0; i < text.length; i++) {
    let ch = text[i].toLowerCase();

    if (
        ch === "a" ||
        ch === "e" ||
        ch === "i" ||
        ch === "o" ||
        ch === "u"
    ) {
        count++;
    }
}

console.log("Number of vowels =", count);

// 3. Check whether a string is a palindrome.
let word = "madam";
let reversedWord = "";

for (let i = word.length - 1; i >= 0; i--) {
    reversedWord += word[i];
}

if (word === reversedWord) {
    console.log("Palindrome");
} else {
    console.log("Not Palindrome");
}

// 4. Capitalize the first letter of every word in a sentence.
let sentence = "javascript is fun";
let words = sentence.split(" ");
let result = "";

for (let i = 0; i < words.length; i++) {
    let capitalized =
        words[i][0].toUpperCase() + words[i].slice(1);

    result += capitalized + " ";
}

console.log("Capitalized Sentence =", result);

// 5. Find the longest word in a sentence.
let line = "JavaScript programming is interesting";
let wordsArray = line.split(" ");
let longestWord = "";

for (let i = 0; i < wordsArray.length; i++) {
    if (wordsArray[i].length > longestWord.length) {
        longestWord = wordsArray[i];
    }
}

console.log("Longest Word =", longestWord);


// Numbers and Math
// 1. Generate a random number between 1 and 100.
let randomNumber = Math.floor(Math.random() * 100) + 1;
console.log("Random Number =", randomNumber);

// 2. Check whether a number is prime.
let num = 13;
let isPrime = true;

if (num <= 1) {
    isPrime = false;
}

for (let i = 2; i < num; i++) {
    if (num % i === 0) {
        isPrime = false;
        break;
    }
}
if (isPrime) {
    console.log(num, "is Prime");
} else {
    console.log(num, "is Not Prime");
}

// 3. Find factorial of a number using loops.
let number = 5;
let factorial = 1;

for (let i = 1; i <= number; i++) {
    factorial *= i;
}
console.log("Factorial =", factorial);

// 4. Find Fibonacci series up to n numbers.
let n = 10;
let a = 0, b = 1;
console.log("Fibonacci Series:");
for (let i = 1; i <= n; i++) {
    console.log(a);
    let next = a + b;
    a = b;
    b = next;
}

// 5. Check whether a number is Armstrong number.
let value = 153;
let temp = value;
let sum = 0;

while (temp > 0) {
    let digit = temp % 10;
    sum += digit ** 3;
    temp = Math.floor(temp / 10);
}
if (sum === value) {
    console.log(value, "is Armstrong Number");
} else {
    console.log(value, "is Not Armstrong Number");
}


// Arrays
// 1. Find the largest and smallest number in an array.
let numbers = [12, 45, 7, 89, 23];
let largest = numbers[0];
let smallest = numbers[0];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > largest) {
        largest = numbers[i];
    }

    if (numbers[i] < smallest) {
        smallest = numbers[i];
    }
}

console.log("Largest Number =", largest);
console.log("Smallest Number =", smallest);

// 2. Remove duplicate elements from an array.
let arr = [1, 2, 3, 2, 4, 1, 5];
let uniqueArray = [];

for (let i = 0; i < arr.length; i++) {
    if (!uniqueArray.includes(arr[i])) {
        uniqueArray.push(arr[i]);
    }
}

console.log("Array after removing duplicates =", uniqueArray);

// 3. Sort an array without using built-in sort().
let values = [5, 2, 8, 1, 9];

for (let i = 0; i < values.length; i++) {
    for (let j = i + 1; j < values.length; j++) {
        if (values[i] > values[j]) {
            let temp = values[i];
            values[i] = values[j];
            values[j] = temp;
        }
    }
}

console.log("Sorted Array =", values);

// 4. Find second largest number in an array.
let nums = [10, 45, 67, 23, 89, 54];
let firstLargest = -Infinity;
let secondLargest = -Infinity;

for (let i = 0; i < nums.length; i++) {
    if (nums[i] > firstLargest) {
        secondLargest = firstLargest;
        firstLargest = nums[i];
    } else if (
        nums[i] > secondLargest &&
        nums[i] !== firstLargest
    ) {
        secondLargest = nums[i];
    }
}

console.log("Second Largest Number =", secondLargest);

// 5. Merge two arrays and remove duplicates.
let array1 = [1, 2, 3, 4];
let array2 = [3, 4, 5, 6];
let mergedArray = [...array1, ...array2];
let result = [];

for (let i = 0; i < mergedArray.length; i++) {
    if (!result.includes(mergedArray[i])) {
        result.push(mergedArray[i]);
    }
}

console.log("Merged Array without duplicates =", result);


// Objects
// 1. Create an object for a student and display all properties dynamically.
let student = {
    name: "Abhishek",
    age: 21,
    course: "JavaScript",
    city: "Chennai"
};

for (let key in student) {
    console.log(key + " =", student[key]);
}

// 2. Count number of keys in an object.
let person = {
    name: "Abhishek",
    age: 22,
    job: "Developer"
};
let count = 0;

for (let key in person) {
    count++;
}

console.log("Number of Keys =", count);

// 3. Merge two objects into one.
let obj1 = {
    name: "Abhishek",
    age: 22
};
let obj2 = {
    course: "JavaScript",
    city: "Chennai"
};

let mergedObject = {
    ...obj1,
    ...obj2
};

console.log("Merged Object =", mergedObject);

// 4. Convert an object into an array of keys and values.
let user = {
    name: "Abhishek",
    age: 22,
    city: "vskp"
};
let keys = [];
let values = [];

for (let key in user) {
    keys.push(key);
    values.push(user[key]);
}

console.log("Keys =", keys);
console.log("Values =", values);

// 5. Create a shopping cart object and calculate total bill amount.
let cart = {
    rice: 120,
    oil: 150,
    sugar: 80,
    milk: 40
};
let total = 0;

for (let item in cart) {
    total += cart[item];
}

console.log("Total Bill Amount =", total);


// Loops
// 1. Print star pyramid patterns.
let rows = 5;

for (let i = 1; i <= rows; i++) {
    let pattern = "";

    for (let j = 1; j <= i; j++) {
        pattern += "* ";
    }

    console.log(pattern);
}

// 2. Print multiplication tables from 1 to 10.
for (let i = 1; i <= 10; i++) {

    console.log("Table of", i);

    for (let j = 1; j <= 10; j++) {
        console.log(i + " x " + j + " = " + (i * j));
    }

    console.log("----------------");
}

// 3. Find sum of all even numbers between 1 and 100.
let sum = 0;

for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        sum += i;
    }
}

console.log("Sum of Even Numbers =", sum);

// 4. Print all prime numbers between 1 and 100.
for (let num = 2; num <= 100; num++) {

    let isPrime = true;

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(num);
    }
}

// 5. Create a number guessing game using loops.
let secretNumber = 7;
let guess = 0;

while (guess !== secretNumber) {

    guess = Number(prompt("Enter your guess number:"));

    if (guess === secretNumber) {
        console.log("Correct Guess!");
    } else {
        console.log("Try Again!");
    }
}


// Functions
// 1. Create a function that returns the greatest of three numbers.
function greatestNumber(a, b, c) {

    if (a > b && a > c) {
        return a;
    } else if (b > a && b > c) {
        return b;
    } else {
        return c;
    }
}

console.log("Greatest Number =", greatestNumber(10, 45, 25));

// 2. Write a function to check whether a number is palindrome.
function palindromeNumber(num) {

    let original = num;
    let reversed = 0;

    while (num > 0) {
        let digit = num % 10;

        reversed = reversed * 10 + digit;

        num = Math.floor(num / 10);
    }

    if (original === reversed) {
        return "Palindrome Number";
    } else {
        return "Not Palindrome";
    }
}

console.log(palindromeNumber(121));

// 3. Create a reusable function for currency conversion.
function currencyConverter(amount, rate) {

    return amount * rate;
}
let rupees = currencyConverter(100, 83);

console.log("Converted Amount =", rupees);

// 4. Write a function that accepts an array and returns only even numbers.
function evenNumbers(arr) {

    let evenArray = [];

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] % 2 === 0) {
            evenArray.push(arr[i]);
        }
    }

    return evenArray;
}

console.log(evenNumbers([1, 2, 3, 4, 5, 6, 7, 8]));

// 5. Create a calculator using functions for add, subtract, multiply, and divide.
const calc = {
    sum: (...op) => op.reduce((acc, curr) => acc + curr, 0),
    sub: (...op) => op.reduce((acc, curr) => acc - curr, 0),
    mul: (...op) => op.reduce((acc, curr) => acc * curr, 1),
    div: (...op) => op.reduce((acc, curr) => acc / curr, 1),
};
 
console.log(calc.sum(5, 5, 10, 20));


// Scope and Hoisting
// 1. Predict output of variable hoisting examples.
console.log(a);
var a = 10;
console.log(a);

// Output:
// undefined
// 10

// 2. Create examples showing block scope using let.
{
    let message = "Hello JavaScript";

    console.log(message);
}

// console.log(message);

// Output:
// Hello JavaScript
// message is not defined (outside block)

// 3. Write a program demonstrating closure behavior.
function outerFunction() {

    let count = 0;

    function innerFunction() {
        count++;

        console.log("Count =", count);
    }
    return innerFunction;
}
let counter = outerFunction();

counter();
counter();
counter();

// Output:
// Count = 1
// Count = 2
// Count = 3

// 4. Create nested functions and access outer variables.
function firstFunction() {

    let name = "Abhishek";

    function secondFunction() {

        let course = "JavaScript";
        function thirdFunction() {

            console.log(name);
            console.log(course);
        }
        thirdFunction();
    }
    secondFunction();
}
firstFunction();

// Output:

// JavaScript

// 5. Debug a program with incorrect variable scoping.
function testScope() {

    if (true) {
        let value = 100;

        console.log(value);
    }

    // console.log(value);
}

testScope();

// Output:
// 100
// value is not defined outside block


// Callback functions and setTimeout
// 1. Create a delayed greeting message using setTimeout.
setTimeout(function () {

    console.log("Hello! Welcome to JavaScript");

}, 3000);

// 2. Build a countdown timer.
let count = 5;
let timer = setInterval(function () {

    console.log(count);

    count--;

    if (count < 0) {
        clearInterval(timer);

        console.log("Countdown Finished!");
    }

}, 1000);

// 3. Create a callback-based calculator.
const calc = {
    sum: (...op) => op.reduce((acc, curr) => acc + curr, 0),
    sub: (...op) => op.reduce((acc, curr) => acc - curr, 0),
    mul: (...op) => op.reduce((acc, curr) => acc * curr, 1),
    div: (...op) => op.reduce((acc, curr) => acc / curr, 1),
};

function calculator(operation, ...operands) {
    return operation(...operands);
}
 
console.log(calculator(calc.sum, 1, 2, 3))
 
// 4. Simulate food ordering system using callbacks.
function placeOrder(callback) {
    console.log("Order Placed");
    callback();
}

function prepareFood(callback) {
    console.log("Food Preparing");
    callback();
}

function deliverFood() {
    console.log("Food Delivered");
}

placeOrder(function () {
    prepareFood(function () {
        deliverFood();
    });
});

// 5. Execute functions sequentially using callbacks.
function firstTask(callback) {
    console.log("First Task Completed");
    callback();
}

function secondTask(callback) {
    console.log("Second Task Completed");
    callback();
}

function thirdTask() {
    console.log("Third Task Completed");
}

firstTask(function () {
    secondTask(function () {
        thirdTask();
    });
});


// Arrow functions
// 1. Convert normal functions into arrow functions.
// Normal Function
function add(a, b) {
    return a + b;
}
console.log(add(10, 5));

// Arrow Function
const addition = (a, b) => {
    return a + b;
};
console.log(addition(10, 5));

// 2. Create one-line arrow functions with implicit return.
const square = num => num * num;
console.log("Square =", square(5));

// 3. Use arrow functions with map().
let numbers = [1, 2, 3, 4, 5];
let doubledNumbers = numbers.map(num => num * 2);
console.log(doubledNumbers);

// 4. Build an even/odd checker using arrow functions.
const checkEvenOdd = num => {

    if (num % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
};

console.log(checkEvenOdd(8));
console.log(checkEvenOdd(5));

// 5. Create a student grade calculator using arrow functions.
const calculateGrade = marks => {

    if (marks >= 90) {
        return "A Grade";
    } else if (marks >= 75) {
        return "B Grade";
    } else if (marks >= 50) {
        return "C Grade";
    } else {
        return "Fail";
    }
};

console.log(calculateGrade(92));
console.log(calculateGrade(68));


// map(), filter(), forEach()
// 1. Double all numbers in an array using map().
let numbers = [1, 2, 3, 4, 5];
let doubledNumbers = numbers.map(num => num * 2);

console.log(doubledNumbers);

// 2. Filter all students scoring above 80 marks.
let students = [
    { name: "Abhishek", marks: 75 },
    { name: "Abhis", marks: 92 },
    { name: "Agnes", marks: 85 },
    { name: "Anish", marks: 60 }
];
let topStudents = students.filter(student => student.marks > 80);

console.log(topStudents);

// 3. Print all array values using forEach().
let fruits = ["Apple", "Banana", "Mango", "Orange"];

fruits.forEach(fruit => {
    console.log(fruit);
});

// 4. Convert array of names into uppercase.
let names = ["Abhishek", "agnes", "akshayaa"];
let upperCaseNames = names.map(name => name.toUpperCase());

console.log(upperCaseNames);

// 5. Extract only even numbers using filter().
let values = [10, 15, 22, 33, 40, 55, 60];
let evenNumbers = values.filter(num => num % 2 === 0);

console.log(evenNumbers);


// Primitive vs Reference types
// 1. Create examples showing primitive copying behavior.
let a = 10;
let b = a;
b = 20;

console.log("a =", a);
console.log("b =", b);

// 2. Create examples showing object reference behavior.
let person1 = {
    name: "Abhishek"
};
let person2 = person1;
person2.name = "Anish";

console.log(person1);
console.log(person2);

// 3. Clone an object without affecting original object.
let originalObject = {
    name: "Abhishek",
    age: 22
};

let clonedObject = {
    ...originalObject
};

clonedObject.name = "Agnes";

console.log("Original Object =", originalObject);
console.log("Cloned Object =", clonedObject);

// 4. Compare arrays using reference equality.
let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3];

console.log(arr1 === arr2);

// 5. Demonstrate shallow copy using spread operator.
let user = {
    name: "Abhishek",
    address: {
        city: "Bengaluru"
    }
};

let copiedUser = {
    ...user
};

copiedUser.name = "Akash";

console.log(user);
console.log(copiedUser);
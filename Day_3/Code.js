// Level 1

// 1. Logging Names
const names = ['Alice', 'Bob', 'Charlie'];
names.forEach(name => console.log("Hello, " + name));

// 2. Temperature Conversion
const celsius = [0, 10, 20, 30];
const fahrenheit = celsius.map(c => c * 1.8 + 32);
console.log("Fahrenheit:", fahrenheit);


// Level 2

// 3. Finding Adults
const users = [
    { name: 'Li', age: 16 },
    { name: 'Dan', age: 22 },
    { name: 'Sarah', age: 17 }
];
const adults = users.filter(user => user.age >= 18);
console.log("Adults:", adults);

// 4. String Lengths
function longStrings(arr) {
    return arr.filter(str => str.length > 5);
}
console.log(longStrings(["hello", "javascript", "hi", "amazing"]));


// Level 3

// 5. Total Cost
const prices = [19.99, 5.50, 3.99, 25.00];
const total = prices.reduce((sum, price) => sum + price, 0);
console.log("Total Cost:", total);

// 6. Counting Occurrences
const fruits = ['apple', 'banana', 'orange', 'apple', 'grape', 'apple'];
const appleCount = fruits.reduce((count, item) => {
    return item === "apple" ? count + 1 : count;
}, 0);
console.log("Apple Count:", appleCount);


// Level 4

// 7. Array Transformation
const nums = [1, 2, 3, 4, 5, 6];
const result = nums
    .filter(n => n % 2 === 0)
    .map(n => n * n);
console.log("Even Squares:", result);

// 8. Object Extraction
const products = [
    { id: 1, title: 'Laptop' },
    { id: 2, title: 'Mouse' }
];
const titles = products.map(p => p.title);
console.log("Titles:", titles);


// Level 5

// 9. Average
const scores = [80, 90, 70, 100];
const avg = scores.reduce((sum, score) => sum + score, 0) / scores.length;
console.log("Average:", avg);

// 10. Flattening
const nested = [[1, 2], [3, 4], [5, 6]];
const flat = nested.reduce((acc, curr) => acc.concat(curr), []);
console.log("Flattened:", flat);
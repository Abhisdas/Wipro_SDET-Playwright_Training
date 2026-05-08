// console.log(greet);
// let greet = "Hello, World!";
// console.log(greet);
 
// var greet; --> init -> undefined
// log()
// greet = "h W"
// log()
 
// sayHi();
// function sayHi() {
//     console.log('Hello, World!');
// }
 
// var sayHi = () => {
//     console.log('Hello');
// }
 
 
// console.log(greet);
// let greet = "Hello, World!";
// console.log(greet);
 
// var greet; --> init -> undefined
// log()
// greet = "h W"
// log()
 
// sayHi();
// function sayHi() {
//     console.log('Hello, World!');
// }
 
// var sayHi = () => {
//     console.log('Hello');
// }
 
 
// console.log(greet);
// let greet = "Hello, World!";
// console.log(greet);
 
// var greet; --> init -> undefined
// log()
// greet = "h W"
// log()
 
// sayHi();
// function sayHi() {
//     console.log('Hello, World!');
// }
 
// var sayHi = () => {
//     console.log('Hello');
// }
 
// Every object --> Object
const car = {
    brand: "Tesla",
    start: () => console.log("VroomVroom")
}
 
 
function start() {
    console.log("VroomVroom")
}
 
const c1 = new start();
const c2 = new start();
 
start.prototype.stop = function() {
    console.log("Stop");
}
// c1.stop();
// c2.stop();
 
// car {start} --> prototype {stop}
// c1 --> start
// c2 --> start
// c1.stop();
 
const animal = { eats: true };
const rabbit = Object.create(animal); // creates a new object rabbit with prototype animal
rabbit.carrot = () => console.log("He is eating carrot");
console.log(rabbit.eats); // inherted from animal
console.log(rabbit.hasOwnProperty('eats'))
console.log(rabbit.hasOwnProperty('carrot'))
console.log(rabbit.toString())
 
// console.log(greet);
// let greet = "Hello, World!";
// console.log(greet);
 
// var greet; --> init -> undefined
// log()
// greet = "h W"
// log()
 
// sayHi();
// function sayHi() {
//     console.log('Hello, World!');
// }
 
// var sayHi = () => {
//     console.log('Hello');
// }
 
// Every object --> Object




const car = {
    brand: "Tesla",
    start: () => console.log("VroomVroom")
}
 
 
function start() {
    console.log("VroomVroom")
}
 
const c1 = new start();
const c2 = new start();
 
start.prototype.stop = function() {
    console.log("Stop");
}
// c1.stop();
// c2.stop();
 
// car {start} --> prototype {stop}
// c1 --> start
// c2 --> start
// c1.stop();
 
const animal = { eats: true };
const rabbit = Object.create(animal); // creates a new object rabbit with prototype animal
rabbit.carrot = () => console.log("He is eating carrot");
console.log(rabbit.eats); // inherted from animal
console.log(rabbit.hasOwnProperty('eats'))
console.log(rabbit.hasOwnProperty('carrot'))
console.log(rabbit.toString())
 
const arr = [1, 2, 3, -1];
arr.reverse();
arr.sort();
for(let e of arr) { // in -> index, of -> value
    console.log(e);
}
 
// Basics of typescript

// let name = "Abhishek";
// console.log(name);
// output : Abhishek

let name: string = "Abhishek";
let result: number | string;
result = 45;
result = "success";
console.log(name, result);
 
function add(a: number, b: number): string {
    return "Sum: " + (a + b);
}
console.log(add(5, 10));


// Interface in typescript
interface Person {
    id: number;
    name: string;
    age: number;
    role: Role; // using enum for role
    isAdmin?: boolean; // optional property ?
}
// Interface merging
interface Person {
    email: string; // merge interface to add email property
}

// enum in typescript
enum Role {
    User = "USER",
    Admin = "ADMIN",
    SuperAdmin = "SUPER_ADMIN"
} // USER, user, User, ADMIN, Admin, admin, SUPER_ADMIN, SuperAdmin, superAdmin

// object using interface
const user: Person = {
    id: 1,
    name: "Abhishek",
    age: 22,
    role: Role.User,
    email: "hrithi@gmail.com"
};

// another object using same interface
const admin: Person = {
    id: 2,
    name: "Agnes",
    age: 22,
    email: "agnes@gmail.com",
    role: Role.Admin,
    isAdmin: true
};

console.log(user, admin);

// tuuple in typescript
let coordinates: [number, string] = [40.7128, "-74.0060"]; // Tuple for latitude and longitude
console.log("Coordinates:", coordinates);

// array typing
let arr: number[] = [1, 2, 3]; // array of numbers
console.log("Array:", arr);

// Generics in typescript
// Syntax
function identity<T>(arg: T): T {
    return arg;
}

// Example
let output = identity<number>(10);
let outpu1 = identity<string>("Abhishek");
let outpu2 = identity<boolean>(true);
console.log(output, outpu1, outpu2);

// Generic interface for a bag that can hold any type of content
interface Bag<T> {
    content: T;
}

const stringBag: Bag<string> = {content: "Apple"};
const numberBag: Bag<number> = {content: 5};
console.log(stringBag, numberBag);

// Generic class
class Storage<T> {
    private items: T[] = [];
    // addItems() adds value into array
    // void meaans no return type
    addItems(item: T): void { 
        this.items.push(item);
    }
    // getItem() returns item using index
    getItem(index: number): T {
        // ! means value will exist
        return this.items[index]!; // non-null assertion operator to indicate that the item will exist at the given index
    }
}

// object creation using generic class
// storage class with string datatype
const names = new Storage<string>();
names.addItems("Abhishek");
names.addItems("Agnes");
names.addItems("Anish");
console.log(names.getItem(0), names.getItem(1), names.getItem(2), names.getItem(3)); // undefined for index 3
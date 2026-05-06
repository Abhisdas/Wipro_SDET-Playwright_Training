async function getData() {
    const sum = 2 + 2;
    return await new Promise((resolve, reject) => {
        if(2 < 3) {
            setTimeout(() => {
                resolve("Data received");
            }, 2000);
        } else {
            reject('not working')
        }
    });
}
 
async function getTodos(url) {
    let data = await fetch("https://jsonplaceholder.typicode.com/todos"); // cursor is blocked in this line
    data = data.json();
    return data;
}
 
// getTodos().then(data => console.log(data));
 
const obj = {
    name: "Aaryan",
    age: 25,
    city: "New York"
}
 
// console.log(JSON.stringify(obj)); // object -> string
// console.log(JSON.parse('{"name":"Aaryan","age":25,"city":"New York"}')); // string -> object
 
// fetch("https://jsonplaceholder.typicode.com/todos")
//     .then(res => res.json()) // res -> string -> json)
//     .then(data => data.filter(d => d.id % 2 === 0))
//     .then(data => data.map(d => (d.title = "Aaryan " + d.title)))
//     .then(data => console.log(data))
//     .catch(error => console.error("Error fetching data:", error));
 
// getData().then((data) => {
//     console.log(data);
// }).catch((error) => {
//     console.error("Error:", error);
// });
 
const timeoutId = setTimeout(() => {
    console.log("Data received");
}, 5000);
console.log("test");
 
clearTimeout(timeoutId);
 
const i = setInterval(() => {
    console.log("Checking for new data...");
}, 3000);
 
clearInterval(i);
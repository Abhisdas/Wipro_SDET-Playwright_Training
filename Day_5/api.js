// QUESTION 1


async function q1() {
  let res = await fetch("https://catfact.ninja/facts");
  let data = await res.json();
  console.log(data.data.map(d => d.fact));
}
q1();


// QUESTION 2



async function q2() {
  let res = await fetch("https://dog.ceo/api/breeds/list/all");
  let data = await res.json();
  console.log(Object.keys(data.message).splice(0, 1));
}
q2();


// QUESTION 3




async function q3() {
  let res = await fetch("https://fakestoreapi.com/products");
  let data = await res.json();
  console.log(data.map(p => p.price).reduce((a, b) => a + b, 0));
}
q3();


// QUESTION 4



async function q4() {
  let res = await fetch("https://jsonplaceholder.typicode.com/posts");
  let data = await res.json();
  console.log(data.filter(p => p.userId === 1).length);
}
q4();


// QUESTION 5



async function q5() {
  let res = await fetch("https://jsonplaceholder.typicode.com/users");
  let data = await res.json();
  console.log(data[0].name, typeof data);
}
q5();


// QUESTION 6



async function q6() {
  let res = await fetch("https://api.quotable.io/quotes");
  let data = await res.json();
  console.log(data.results[0].content);
}
q6();


// QUESTION 7



async function q7() {
  let res = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd");
  let data = await res.json();
  console.log(data.bitcoin.usd);
}
q7();
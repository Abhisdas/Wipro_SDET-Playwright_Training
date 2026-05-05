function getData() {
  return new Promise((resolve, reject) => {
    console.log("Fetching data...");

    setTimeout(() => {
      const success = true; 
      if (success) {
        resolve("Data received");
      } else {
        reject("Failed to fetch data");
      }
    }, 2000);
  });
}

getData()
  .then((data) => {
    console.log("Success:", data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });



setTimeout(() => {
  console.log("This runs after 5 seconds");
}, 5000);

setInterval(() => {
  console.log("Checking for new data...");
}, 3000);
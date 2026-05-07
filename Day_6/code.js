/*************************************************
 Question 1: The Flight Booking Data Cleaner
*************************************************/

function cleanFlightData(rawFlights = []) {
  if (!Array.isArray(rawFlights)) return JSON.stringify([]);

  const cleanedFlights = rawFlights
    .map((flight) => {
      if (typeof flight !== "string") {
        return { from: "", to: "", price: 0 };
      }

      const [route = "", rawPrice = "0"] = flight.split(":");
      const [from = "", to = ""] = route.split("-");

      let price = Number(rawPrice);

      if (isNaN(price)) {
        price = 0;
      }

      return {
        from: from.trim(),
        to: to.trim(),
        price,
      };
    })
    .filter((flight) => flight.price >= 100 && flight.price <= 500)
    .sort((a, b) => a.price - b.price);

  return JSON.stringify(cleanedFlights, null, 2);
}

// Example Input
const rawFlights = [
  "London-Paris:150",
  "New York-Tokyo:invalid",
  "Dubai-Mumbai:450",
  "Berlin-Rome:95",
];

console.log("Question 1 Output:");
console.log(cleanFlightData(rawFlights));



/*************************************************
 Question 2: The E-Commerce Discount Applicator
*************************************************/

// Callback Function
const isEligible = (product) => {
  return (
    product &&
    product.category === "Electronics" &&
    Number(product.price) > 200
  );
};

function applyPromo(cart = [], promoCallback) {
  return new Promise((resolve) => {
    if (!Array.isArray(cart)) {
      resolve([]);
      return;
    }

    let discountedItems = 0;
    let totalSavings = 0;

    const updatedCart = cart.map((product) => {
      const item = { ...product };

      if (promoCallback(item)) {
        const discount = item.price * 0.1;

        item.price = Number((item.price - discount).toFixed(2));
        item.isDiscounted = true;

        discountedItems++;
        totalSavings += discount;
      } else {
        item.isDiscounted = false;
      }

      return item;
    });

    console.log(
      `Promotion applied! ${discountedItems} items were discounted for a total saving of $${totalSavings.toFixed(
        2
      )}.`
    );

    // Delayed return
    setTimeout(() => {
      resolve(updatedCart);
    }, 1000);
  });
}

// Example Input
const cart = [
  { name: "Smartphone", price: 800, category: "Electronics" },
  { name: "Toaster", price: 50, category: "Home" },
  { name: "Headphones", price: 250, category: "Electronics" },
  { name: "Monitor", price: 150, category: "Electronics" },
];

// Run Question 2
applyPromo(cart, isEligible).then((result) => {
  console.log("\nQuestion 2 Output:");
  console.log(result);
});



/*************************************************
 Question 3: The Movie Stream Analytics
*************************************************/

function processMovieData(rawMovies = []) {
  if (!Array.isArray(rawMovies)) return JSON.stringify([]);

  const processedMovies = rawMovies
    .map((movie) => {
      if (typeof movie !== "string") {
        return { name: "", genre: "", views: 0 };
      }

      const [name = "", genre = "", rawViews = "0"] = movie.split("|");

      let views = Number(rawViews);

      if (isNaN(views)) {
        views = 0;
      }

      return {
        name: name.trim(),
        genre: genre.trim(),
        views,
      };
    })
    .filter(
      (movie) =>
        (movie.genre === "Action" || movie.genre === "Sci-Fi") &&
        movie.views > 5000
    )
    .sort((a, b) => b.views - a.views);

  return JSON.stringify(processedMovies, null, 2);
}

// Example Input
const rawMovies = [
  "Inception|Sci-Fi|12000",
  "The Lion King|Animation|8000",
  "Mad Max|Action|invalid",
  "The Matrix|Sci-Fi|15000",
  "Gladiator|Action|4500",
];

console.log("\nQuestion 3 Output:");
console.log(processMovieData(rawMovies));



/*************************************************
 Question 4: The Automated Payroll Processor
*************************************************/

// Callback Function
const taxLogic = (salary) => {
  return salary > 5000 ? 0.2 : 0.1;
};

function calculatePayroll(employees = [], taxCallback) {
  return new Promise((resolve) => {
    if (!Array.isArray(employees)) {
      resolve([]);
      return;
    }

    let totalNetPayout = 0;

    const processedEmployees = employees.map((employee) => {
      const emp = { ...employee };

      const salary = Number(emp.salary) || 0;

      const taxRate = taxCallback(salary);
      const taxAmount = salary * taxRate;
      const netSalary = salary - taxAmount;

      emp.tax = Number(taxAmount.toFixed(2));
      emp.netSalary = Number(netSalary.toFixed(2));
      emp.status = netSalary > 4000 ? "Premium" : "Standard";

      totalNetPayout += netSalary;

      return emp;
    });

    console.log(
      `Payroll Processed: Total Net Payout is $${totalNetPayout.toFixed(
        2
      )} for ${processedEmployees.length} employees.`
    );

    // Delayed return
    setTimeout(() => {
      resolve(processedEmployees);
    }, 2000);
  });
}

// Example Input
const employees = [
  { id: 101, name: "Alice", salary: 6000 },
  { id: 102, name: "Bob", salary: 3500 },
  { id: 103, name: "Charlie", salary: 5200 },
];

// Run Question 4
calculatePayroll(employees, taxLogic).then((result) => {
  console.log("\nQuestion 4 Output:");
  console.log(result);
});
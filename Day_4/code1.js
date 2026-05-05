async function runAPIs() {
  try {

    //  Dog API
    const dog = await fetch("https://dog.ceo/api/breeds/image/random").then(r => r.json());

    //  Cat Fact API
    const cat = await fetch("https://catfact.ninja/fact").then(r => r.json());

    // Random User API
    const user = await fetch("https://randomuser.me/api/").then(r => r.json());

    // Joke API
    const joke = await fetch("https://official-joke-api.appspot.com/random_joke").then(r => r.json());

    //  Crypto API
    const crypto = await fetch("https://api.coindesk.com/v1/bpi/currentprice.json").then(r => r.json());

    //  Country API
    const country = await fetch("https://restcountries.com/v3.1/name/india").then(r => r.json());

    //  Advice API
    const advice = await fetch("https://api.adviceslip.com/advice").then(r => r.json());

    //  Numbers API
    const number = await fetch("http://numbersapi.com/42?json").then(r => r.json());

    //  Food API
    const food = await fetch("https://www.themealdb.com/api/json/v1/1/random.php").then(r => r.json());

    //  Activity API
    const activity = await fetch("https://www.boredapi.com/api/activity").then(r => r.json());



    const userNames = user.results.map(u => u.name.first);

  
    const rates = Object.values(crypto.bpi);
    const highRates = rates.filter(c => c.rate_float > 30000);

    
    const texts = [cat.fact, advice.slip.advice, number.text];
    const totalLength = texts.reduce((acc, curr) => acc + curr.length, 0);

   
    const { message: dogImage } = dog;

   
    const meal = food.meals?.[0]?.strMeal;

   
    const isFun = activity.participants <= 2 ? "Easy" : "Group";

  
    const combinedData = [
      cat.fact,
      joke.setup + " " + joke.punchline,
      advice.slip.advice
    ];

  
    const upperFacts = combinedData.map(x => x.toUpperCase());

    const longFacts = combinedData.filter(x => x.length > 50);

    
    const result = {
      dogImage,
      userNames,
      country: country[0].name.common,
      cryptoHighRates: highRates.length,
      totalTextLength: totalLength,
      meal,
      activityType: isFun,
      longFactsCount: longFacts.length,
      sampleFact: upperFacts[0]
    };

    console.log("🔥 FINAL RESULT:", result);

  } catch (err) {
    console.error("Error:", err);
  }
}

runAPIs();
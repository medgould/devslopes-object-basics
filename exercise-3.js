// Module 3 Exercise: Looping in Objects
// Start with exercise-3.md if you haven't read it!

const dominos = {
  name: "Domino's",
  cuisines: ["italian", "new york", "pizza"],
  pizzaToppings: {
    pepperoni: 2.2,
    mushrooms: 0.7,
    extraCheese: 1.4,
    onions: 0.5,
    sausage: 2.8,
    extraSauce: 0.8,
  },
  starReviews: {
    Peach: 3,
    Yoshi: 2.1,
    Bowser: 4,
    Mario: 5,
    Luigi: 5,
    Gumba564: 3.4,
    "Donkey Kong": 3.2,
  },
  favorited: true,
  address: "123 Elm Street",
  
  zipcode: 54321,
  acceptsReservations: true,
};

//console.log("Welcome to " + dominos.name + "!");

// Write a function that prints out all of the keys in the object. 
// You can use either a for...in loop or Object.keys() to get the keys.

function printPizzaPlace(object) {
   for (const key of Object.keys(dominos)) {
     console.log(key,dominos[key]);
    }
}
printPizzaPlace(dominos);

//console.log("Our pizza toppings are:");

printPizzaPlace(dominos.pizzaToppings);


// calculateAverageRating 

function calculateAverageRating(reviews) {
  total = 0;
  count = 0;  
  for (const rating of Object.values(reviews)) {
    total += rating;
    count++;
  }
  return total / count;
}
console.log("Average:", calculateAverageRating(dominos.starReviews));
/* 
Module Two Exercise: Object Methods
Start with exercise-2.md if you haven't read it! 
*/

//  DO NOT EDIT THE BELOW OBJECT // 

const papaJohns = {
  name: "Papa John's",
  slogan: "Better Ingredients. Better Pizza. Papa John's.",
  cuisines: ["italian", "american", "pizza"],
  pizzaToppings: {
    pepperoni: 2,
    peppers: 0.6,
    extraCheese: 1.5,
    olives: 0.5,
    bacon: 3,
    extraSauce: 1,
  },
  numberOfStars: 3.5,
  favorited: false,
  address: "555 Main Street",
  zipcode: 11234,
  acceptsReservations: false,
};

// DO NOT EDIT THE ABOVE OBJECT // 

// YOUR WORK GOES HERE // 

function grabCatigories(object) {
  return Object.keys(object );
}

console.log('\n ******   Grab Categories *******\n');
console.log(grabCatigories(papaJohns));

console.log('\n  ******   Grab Toppings ******* \n');
console.log(grabCatigories(papaJohns.pizzaToppings));

function verifyValues(object, target) {
  if (Object.values(object).length === target) {
    return true;
  }else {
    return false;
  };     
}

console.log('\n ******   Verify Values *******\n ');

object = papaJohns;
target = 9;
console.log(verifyValues(object, target));

target =  8;
console.log(verifyValues(object, target));

console.log('\n ******   Get Toppings Info *******\n ');
function getToppingsInfo(object) {
  return Object.entries(object.pizzaToppings);
}

console.log(getToppingsInfo(papaJohns));

papaJohns.printAd = function (topping) {
  return `Welcome to ${papaJohns.name}. We are located at ${papaJohns.address}. This week we are having a sale on ${topping} 
  for $${papaJohns.pizzaToppings[topping]}. ${papaJohns.slogan}`;
}    

console.log('\n ******   Print Ad *******\n ');
console.log(papaJohns.printAd('bacon'));

console.log('\n ******   Update Slogan & Address *******\n ');
console.log('Object before changes\n ');
console.log(papaJohns);
papaJohns.slogan = "I mean come on it's delicious.";
papaJohns.address = "123 Amazing Pizza Plaza";


console.log('\n ******   final Object  *******\n ');
console.log(papaJohns);
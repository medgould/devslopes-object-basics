/* 
Module One Exercise: Object Syntax & Notation
Start with exercise-1.md if you haven't read it! 
*/

// YOUR WORK GOES HERE //
const redDoor ={
   name: 'Red Door Grill',
   cuisines: 'American', 
   numberOfStars : 4,
   favorited: true
}
redDoor.address = '15918 W 88th St, Lenexa, KS';
redDoor.zipCode = 66219 ;
redDoor.acceptsReservations  = true;

redDoor.numberOfStars = redDoor.numberOfStars + 1;

if(redDoor.favorited === true){
  redDoor.favorited = false;
}else{
  redDoor.favorited = true;  
}

redDoor.cuisines = ['American', 'Barbecue', 'Steakhouse'];

console.log(redDoor);

function retrieveProperty(object, key){
  if (object.hasOwnProperty(key)){
    return object[key];
    } else {  
      return 'The information you requested does not exist.'
    }
  }

object = redDoor;
key = 'cuisines';

console.log("Retrieving the value of the key 'cuisines':");
console.log(retrieveProperty(object, key));

key = 'favorited';
console.log(retrieveProperty(object, key));

key = 'name';
console.log(retrieveProperty(object, key));

key = 'nickname';
console.log(retrieveProperty(object, key));

key = 'state';
console.log(retrieveProperty(object, key));


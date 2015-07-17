/*
  ...........YOUR MISSION...........

  Make me a sandwich.
  
  1. Create a Sandwich object.
  2. Create 6 keys on the object all defaulted to a value of false
     a. pickle: false
     b. lettuce: false
     c. tomato: false
     d. ketchup: false
     e. mustard: false
     f. mayo: false
  3. Create different functions where each one can change the value of only one of the keys on a Sandwich object to "true".
  4. Create a function named "makeMeASandwich".
  5. That function should take 6 arguments - one for each condiment on the sandwich.
  6. If any of those 6 argument values are true, put that condiment on the sandwich.
  7. Write to the document something like this...
    "My sandwich has pickle, ketchup, mustard on it"
*/

var sandwich = {
  pickle: false,
  lettuce: false,
  tomato: false,
  ketchup: false,
  mustard: false,
  mayo: false
}

function flipPickle() {
  sandwich.pickle = true;
}

function flipLettuce() {
  sandwich.lettuce = true;
}

function flipTomato() {
  sandwich.tomato = true;
}

function flipKetchup() {
  sandwich.ketchup = true;
}

function flipMustard() {
  sandwich.mustard = true;
}

function flipMayo() {
  sandwich.mayo = true;
}

var message = "My sandwich has";

function makeMeASandwich(pickles, lettuces, tomatos, ketchups, mustards, mayos) {
  if (pickles) {
    flipPickle();
    message += " pickle, ";
  }
  if (lettuces) {
    flipLettuce();
    message += " lettuce, ";
  }
  if (tomatos) {
    flipTomato();
    message += " tomato, ";
  }
  if (ketchups) {
    flipKetchup();
    message += " ketchup, ";
  }
  if (mustards) {
    flipMustard();
    message += " mustard, ";
  }
  if (mayos) {
    flipMayo();
    message += " mayo, ";
  }
  return message;
}

var mySandwich = makeMeASandwich(true, true, true, false, false, false);

var showSandwich = document.getElementById("sandwichId")

showSandwich.innerHTML = "<p>" + message + " on it!</p>"

console.log(mySandwich);
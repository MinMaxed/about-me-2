'use strict';

// if(some condition is met) {
//  do this
// } else {
//   do something different
// }


alert('answer "yes" or "no" without quotes for each question');
var noAnswer = 'Better luck next time.';
var score = 0;
var ballroomDancer = prompt('Do you believe I am a high class ballroom dancer?').toLowerCase();
if(ballroomDancer ==='no') {
  alert('You caught me! I have tried it though, and its more fun than I expected');
  score++;
} else if(ballroomDancer ==='yes') {
  alert('hahahahaha I wish....');
} else {
  alert(noAnswer);
}
console.log('correct answer is no, user answered ' + ballroomDancer);

var petOwner = prompt('Do I have 2 pets?').toLowerCase();
if(petOwner ==='yes') {
  alert('Bingo bongo! Two kitties! Kali and Jasper');
  score++;
} else if(petOwner === 'no'){
  alert('Nope, I have two kitties!');
} else {
  alert(noAnswer);
}
console.log('correct answer is yes, user answered ' + petOwner);

var tattoo = prompt('Do you believe I have any tattoos?').toLowerCase();
if(tattoo ==='yes') {
  alert('Sadly just the one. But so many ideas!');
  score++;
} else if(tattoo === 'no'){
  alert('It\'s well hidden and easy to miss');
} else {
  alert(noAnswer);
}
console.log('correct answer is yes, user answered ' + tattoo);

var myAge = prompt('Do you think I am over 30?').toLowerCase();
if(myAge ==='no') {
  alert('You got it! I\'m just 2 years shy');
  score++;
} else if(myAge === 'yes') {
  alert('Who do you think I am, Gandalf!?');
} else {
  alert(noAnswer);
}
console.log('correct answer is no, user answered ' + myAge);

var siblings = prompt('Do I have any younger siblings?').toLowerCase();
if(siblings ==='no') {
  alert('You got it! I\'m the baby in the family');
  score++;
} else if(siblings === 'yes') {
  alert('I have one older sis. Couldn\'t handle more than that!');
} else {
  alert(noAnswer);
}
console.log('correct answer is no, user answered ' + siblings);

var counterToppingsNum = 0;
var answerToppingsNum = 5;
while (counterToppingsNum < 4) {
  var theirTopNumAnswer = parseInt(prompt('what is the perfect number of pizza toppings?'));
  if (answerToppingsNum === theirTopNumAnswer) {
    alert('you got it');
    counterToppingsNum++;
    console.log(counterToppingsNum + ' tries to answer');
    score++;
    break;
  } else if(theirTopNumAnswer < answerToppingsNum) {
    alert('too low');
  } else if (theirTopNumAnswer > answerToppingsNum) {
    alert('too high');
  } counterToppingsNum++;
  console.log(counterToppingsNum + ' guess is wrong');
}

// var myPizzaToppings= ['pepperoni', 'jalapenos', 'anchovies', 'olives','garlic'];

// var pizzaToppingGuess = prompt('Can you guess one of my favorite pizza topping?').toLowerCase();

// for (var i = 0; i < myPizzaToppings.length; i++) {
//   console.log(i);
//   if(pizzaToppingGuess === myPizzaToppings[i]) {
//     console.log('correct');
//     break;
//   } else {
//     prompt(pizzaToppingGuess);
//     console.log('nope');
//   }
// }

alert(score + ' out of 7');
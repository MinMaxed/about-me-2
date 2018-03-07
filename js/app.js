'use strict';

// if(some condition is met) {
//  do this
// } else {
//   do something different
// }


alert('answer "yes" or "no" without quotes for each question');

var ballroomDancer = prompt('Do you believe I am a high class ballroom dancer?').toLowerCase();
if(ballroomDancer ==='no') {
  alert('You caught me! I have tried it though, and its more fun than I expected');
} else {
  alert('hahahahaha I wish....');
}
console.log('correct answer is no, user answered ' + ballroomDancer);

var petOwner = prompt('Do I have 2 pets?').toLowerCase();
if(petOwner ==='yes') {
  alert('Bingo bongo! Two kitties! Kali and Jasper');
} else {
  alert('Nope, I have two kitties!');
}
console.log('correct answer is yes, user answered ' + petOwner);
//TODO: add variables to console.logs
var tattoo = prompt('Do you believe I have any tattoos?').toLowerCase();
if(tattoo ==='yes') {
  alert('Sadly just the one. But so many ideas!');
} else {
  alert('It\'s well hidden and easy to miss');
}
console.log('correct answer is yes, user answered ' + tattoo);

var myAge = prompt('Do you think I am over 30?').toLowerCase();
if(myAge ==='no') {
  alert('You got! I\'m just 2 years shy');
} else {
  alert('Who do you think I am, Gandalf!?');
}
console.log('correct answer is no, user answered ' + myAge);

var siblings = prompt('Do I have any younger siblings?').toLowerCase();
if(siblings ==='no') {
  alert('You got it! I\'m the baby in the family');
} else {
  alert('I have one older sis. Couldn\'t handle more than that!');
}
console.log('correct answer is no, user answered ' + siblings);

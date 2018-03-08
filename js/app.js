'use strict';
alert('Answer "yes" or "no" without quotes for the first 5 questions');
var noAnswer = 'Better luck next time.';
var score = 0;

//Question 1
var ballroomDancer = prompt('1. Do you believe I am a high class ballroom dancer?').toLowerCase();
if(ballroomDancer ==='no') {
  alert('You caught me! I have tried it though, and its more fun than I expected');
  score++;
} else if(ballroomDancer ==='yes') {
  alert('hahahahaha I wish....');
} else {
  alert(noAnswer);
}
console.log('correct answer is no, user answered ' + ballroomDancer);

//Question 2
var petOwner = prompt('2. Do I have 2 pets?').toLowerCase();
if(petOwner ==='yes') {
  alert('Bingo bongo! Two kitties! Kali and Jasper');
  score++;
} else if(petOwner === 'no'){
  alert('Nope, I have two kitties!');
} else {
  alert(noAnswer);
}
console.log('correct answer is yes, user answered ' + petOwner);

//Question 3
var tattoo = prompt('3. Do you believe I have any tattoos?').toLowerCase();
if(tattoo ==='yes') {
  alert('Yes! But just the one.');
  score++;
} else if(tattoo === 'no'){
  alert('It\'s well hidden and easy to miss');
} else {
  alert(noAnswer);
}
console.log('correct answer is yes, user answered ' + tattoo);

//Question 4
var myAge = prompt('4. Do you think I am over 30?').toLowerCase();
if(myAge ==='no') {
  alert('You got it! I\'m just 2 years shy');
  score++;
} else if(myAge === 'yes') {
  alert('Who do you think I am, Gandalf!?');
} else {
  alert(noAnswer);
}
console.log('correct answer is no, user answered ' + myAge);

//Question 5
var siblings = prompt('5. Do I have any younger siblings?').toLowerCase();
if(siblings ==='no') {
  alert('You got it! I\'m the baby in the family');
  score++;
} else if(siblings === 'yes') {
  alert('I have one older sis. Couldn\'t handle more than that!');
} else {
  alert(noAnswer);
}
console.log('correct answer is no, user answered ' + siblings);

//Question 6
var counterToppingsNum = 0;
var answerToppingsNum = 4;
while (counterToppingsNum < 4) {
  var theirTopNumAnswer = parseInt(prompt('6. What is the perfect number of pizza toppings? (write a number)'));
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

//Question 7
var counterToppings = 0;
var correct = false;
var myPizzaToppings = ['pepperoni', 'jalapenos', 'anchovies', 'olives','garlic', 'cheese'];

while( counterToppings < 6 && correct===false) {
  var theirPizzaGuess = prompt('7. Can you guess one of my favorite pizza topping?').toLowerCase();

  for (var i = 0; i < myPizzaToppings.length; i++) {
    //if (myPizzaToppings.includes(theirPizzaGuess)), does not need for loop
    if (myPizzaToppings[i] === theirPizzaGuess) {
      console.log(i);
      alert('you got it');
      score++;
      console.log(counterToppings + ' tries to answer');
      correct=true;
      break;
    }
    else {
      console.log(counterToppings + ' guess is wrong');
    }
  }
  counterToppings++;
}
if ( correct === false ) {
  alert('None??!?');
}

alert(score + ' out of 7');

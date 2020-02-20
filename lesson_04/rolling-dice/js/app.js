/*

Creating a page where every time the user hits the "Roll Dice" button, the screen randomly updates the two dice. Use the html and css code included in the starter code folder to get started.

1) Write down pseudocode for the following program.

1. when a user clicks on "roll the dice", randomly generate two numbers between 1 - 6 and store in variables

2) Follow the steps below to write your code.
* generate a random number between 1 - 6 and store to a variable, random1
* generate a random number between 1 - 6 and store to a variable, random2
* combine 'dice-' and random1 to form the random class for the first die, firstDie
* combine 'dice-' and random2 to form the random class for the second die, secondDie
* get the first die by ID and update the class to firstDie (hint: document.getElementById)
* get the first die by ID and update the class to secondDie (hint:document.getElementById)

3) Check to see if the Dice Roll has been hit, if it has run the diceRoll function.

*/


// 1. refernce element with id="roll-dice"
// 2. listen for click event on that element
// 3. when click event occurs, "call" the rollDice function
document.getElementById('roll-dice').onclick = rollDice

function rollDice() {
  console.log('rolling the dice')

  // generating a random number from 1 to 6
  // for each die (hardcoding values for now)
  const randomDie1 = generateRandomNumber()
  const randomDie2 = generateRandomNumber()

  // generate new css classes that represent
  // random die value
  const firstDieClass = `dice dice-${randomDie1}`
  const secondDieClass = `dice dice-${randomDie2}`
  // console.log(firstDieClass)
  // console.log(secondDieClass)

  // grab reference to elements that represent each dice
  // first-die and second-dice
  // change the class name to the new class names
  // this should change the dice value displayed
  document.getElementById('first-die').className = firstDieClass

  document.getElementById('second-die').className = secondDieClass
}

// declare function that generates a random number from 1-6
function generateRandomNumber() {
  return Math.floor(Math.random() * 6 + 1)
}


//
//
//
// let randomNumber1
// let randomNumber2
//
// function getRandomInt(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
// }

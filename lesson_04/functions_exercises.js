// // initial example
// // declare a function named sayGoodMorning()
// function sayGoodMorning() {
//   console.log("Good Morning")
// }
//
// // call the function
// sayGoodMorning()
//
//
// // hoisting example
// // Calling greetWorld() BEFORE it's function declararion
// greetWorld()
//
// // declaration of greetWorld()
// function greetWorld() {
//   console.log('Hello, World!')
// }

// // retun a keyword
// // return value is a string
// function bark() {
//   return 'woof woof!'
// }
//
// // call the bark function and story results in the variable
// const sound = bark()
// console.log(sound)


// /*
// * 1. Create a function called `sayMoo` that **returns**
// the string `mooooooo!`.
//
// 2. Next, call the function and store
// the result into a variable named `cowSound`
// */
//
// // Add your code below
// function sayMoo() {
//   return 'mooooooo!'
// }
// const cowSound = sayMoo()
//
// // DO NOT MODIFY
// console.log("What does a rapper cow say when you are blocking it's path?")
// console.log(`${cowSound} b*ssh, get out the way!!!!`)


// // define a function called getArea()
// // that accepts two parameters width & height
// // we MUST use the return keyword if we
// // want the function to give us back a value
//
// function getArea(width, height) {
//   return width * height
// }
//
// // Calling the getArea() function with values
// const result = getArea(8, 22) // returns 35
// console.log(getArea)
//
// const width = 9
// const height = 6
// console.log(getArea(width, height))


/*
Create a function `calculateAge` that
accepts `yearOfBirth` (number) as a parameter
and **returns** the current age of associated
with the provided `yearOfBirth`
*/

// Add your function declaration below:
function calculateAge(yearOfBirth) {
  return 2020 - yearOfBirth
}

// DO NOT MODIFY
// calling the function, storing it in a variable
// and logging it out
const firstAge = calculateAge(1995)
console.log(firstAge)


const secondAge = calculateAge(2003)
console.log(secondAge)

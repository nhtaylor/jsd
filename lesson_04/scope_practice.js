// // example of global scope
// // Global function because it was declared outside of a function
// const name = 'Simone Biles'
//
// console.log(name)
// console.log('----')
//
// function bestGymnastEver() {
//   // 'name' variable is accessible here and everywhere else because it is global
//   console.log(name)
// }
//
// bestGymnastEver() // logs 'Simone Biles'
//
//
//
// // example of local scope
// function showInspirationalMessage() {
//   // "message" variable is declared **inside** a function which means it is LOCAL to this function
//
//   const message = "Don't give up, you can do it!!"
//   console.log(message)
// }
//
// // prints message variable
// showInspirationalMessage()
//
// /*
// Now let's attempt to directly access the message variable
// and log it out to the console
// */
//
// console.log(message) // <-- Error! The variable is local to the function can cannot be "directly" accessed outside of the function


// // example of local scope w/ parameters
// function squareMe(number) {
//   // The "number" parameter is variable that is LOCAL to the squareMe function
//
//   return number**2
// }
//
// const result = squareMe(7)
// console.log(result)
//
// /*
// Now let's attempt to directly access the `number` parameter
// */
//
// console.log(number) // <-- Error! The variable is local to the function can cannot be "directly" accessed outside of the function


// more practice
// declare a variable named 'actor' in the Global Scope
const actor = "Daniel Craig"

function bestBondActor() {
  // declare a variable named 'actor' within a function (Local Scope)
  const actor  = "Sean Connery"
  return actor
}

const result = bestBondActor()
console.log(result) // <-- prints Sean Connery

/*
Now let's print out the `actor` variable
*/

console.log(actor) // <-- prints Daniel Craig

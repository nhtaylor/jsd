// example of global scope
// Global function because it was declared outside of a function
const name = 'Simone Biles'

console.log(name)
console.log('----')

function bestGymnastEver() {
  // 'name' variable is accessible here and everywhere else because it is global
  console.log(name)
}

bestGymnastEver() // logs 'Simone Biles'



// example of local scope
function showInspirationalMessage() {
  // "message" variable is declared **inside** a function which means it is LOCAL to this function

  const message = "Don't give up, you can do it!!"
  console.log(message)
}

// prints message variable
showInspirationalMessage()

/*
Now let's attempt to directly access the message variable
and log it out to the console
*/

console.log(message) // <-- Error! The variable is local to the function can cannot be "directly" accessed outside of the function

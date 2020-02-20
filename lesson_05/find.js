const numbers = [5, 3, 13, 4, 11 ]

// const greaterThan5 = numbers.find((number) => {
//   return number > 5
// })

const greaterThan5 = numbers.find((number) => {
  // returns the first thing that meets this criteria
  // will only return 13!
  // order matters in an array
  return number > 5
})
// find does not give you back an array
// it gives you the first of the thing

console.log(greaterThan5) // 13


/*
 Use `.find()` to return the first word that has more than 6
 characters in the `words` array.
 Save the returned values to a variable
 declared with `const` called `longWord`
*/

const words = ["jump", "run", "swim", "catapult", "throw", "trampolining"]

// add your code below

const longWord = words.find((word) => word.length > 6)


// Do not modify
console.log(longWord)

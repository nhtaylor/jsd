const numbers = [5, 3, 13, 4, 11 ]

// finds all of the things that meets the criteria
// returns them in an array
// const greaterThan5 = numbers.filter((number) => {
//   return number > 5
// })

const greaterThan5 = numbers.filter((number) => number > 5)

console.log(greaterThan5) // [13, 11]



/*
 Use `.filter()` to return all the words that have
 more than 6 characters in the `words` array.
 Save the returned values to a variable
 declared with `const` called `longWords`
*/

const words = ["jump", "run", "swim", "catapult", "throw", "trampolining"]
// const words = ["jump", "run", "swim"]
// testing for no words  "catapult", "throw", "trampolining"]

// add your code below

const longWords = words.filter((word) => word.length > 6)


// Do not modify
console.log(longWords)
//test case returns an empty array

// Remember!
// undefined is not an error
// it can be taken advantage of when evaluating conditions

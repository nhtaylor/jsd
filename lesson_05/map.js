const numbers = [1, 2, 3, 4, 5 ]

// map returns a brand new function based on the results of what function we called on each of the array elements
// const numbersSquared = numbers.map((number) => {
//   return number**2
// })


// another way to do this with an anonymous function
numbers.map((number) => {
  return number ** 2
})

// nwo storing the result of this anonymous variable *in* another variable
const numbersSquared = numbers.map((number) => {
  return number ** 2
})

console.log(numbersSquared) // [2, 4, 9, 16, 25]

// console.log(numbers) // [1, 2, 3, 4, 5 ]

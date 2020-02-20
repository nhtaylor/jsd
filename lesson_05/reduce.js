const numbers = [1, 2, 3, 4, 5]

// sum is acculumator variable
// currenNumber represents every number in the array
// being more explicit
// first parameter is accumulator variable with REDUCE
const result = numbers.reduce((sum, currentNumber) => {
  // seeing what each value means for every currentNumber loop
  console.log(`sum: ${sum}`)
  console.log(`currentNumber: ${currentNumber}`)
  return sum + currentNumber
}, 50) // initial value for sum here
// starts iterating on the second number
// first number in the array is the value = sum
// if you don't specify it
// if you *do* want to specify it, you add it ad the end


console.log(result) // 15

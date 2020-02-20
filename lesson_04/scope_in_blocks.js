// example of code block creating local scope when variable is declared using let or const

// scope in block statements
// let name
if (true) {
    // this 'if' conditional block creates a new scope because we use 'let'
   const name = 'Prince' // name is local to the if block
  console.log(name) // logs 'Prince'
}
// let name
console.log('----')
console.log(name) // <--- prints nothing because the 'name' variable can only be accessed from within the block (due to the use of 'let')
// hmm


// example of code block NOT CREATING local scope when a variable is using local scope
// let name
if (true) {
    // this 'if' conditional block creates a new scope because we use 'let'
   const name = 'Prince'
  console.log(name) // logs 'Prince'
}
// let name
console.log('----')
console.log(name) // <--- prints nothing because the 'name' variable can only be accessed from within the block (due to the use of 'let')

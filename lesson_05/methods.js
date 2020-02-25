/*
Add a method to our `superVillain` object with the key named `sayCatchPhrase`, the method should print out the following message to the console "I am inevitable"
*/
let superVillain = {
  'secret identity': 'N/A',
  name: 'Thanos',
  powers: ['Strength', 'genius intellect', 'being a jerk', 'persistence'],
}

superVillain.sayCatchPhrase = () => {
  return "I am inevitable"
}

console.log(superVillain.sayCatchPhrase())

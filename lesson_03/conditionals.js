// let yourGrade = 62
//
// if (yourGrade >= 90) {
//
//   console.log("Congrats your score is 90 or above, that's an A!")
//
// } else if (yourGrade >= 80) {
//
//   console.log("Congrats your score is 80 or above, you earned a B")
//
// } else if (yourGrade >= 70) {
//
//   console.log("You earned a C")
//
// } else if (yourGrade >= 60) {
//
//   console.log("You earned a D, do better next time")
//
// } else {
//
//   console.log("Unfortunately, you have failed that course will need to retake it next semester")
//
// }


/******

Rewrite the following if..else statement using the ternary operator:

----
let yearOfBirth = 2001

if (yearOfBirth <= 2002) {

  console.log('you will be old enough to vote in 2020')

} else {

  console.log('Sorry, you will not be old enough to vote next year')

}
---

******/

// Add your code below

let yearOfBirth = 2001
const year = yearOfBirth <= 2002 ? 'you will be old enough to vote in 2020' : 'Sorry, you will not be old enough to vote next year'
console.log(year)

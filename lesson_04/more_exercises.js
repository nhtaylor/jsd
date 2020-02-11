// // Function that calculates area of a square
//
// function areaOfSquare(side){
//   return side * side
// }
//
// areaOfSquare(3) // returns 9
// console.log(areaOfSquare(3))
//
// // This is a function that calculates the
// // surface area of a cube that *reuses* the areaOfSquare function
//
// function surfaceAreaOfCube(side){
//   return 6 * areaOfSquare(side)
// }
//
// surfaceAreaOfCube(7) // returns 294
//
// console.log(surfaceAreaOfCube(7))


// /*
// Create a function named surfaceAreaOfSphere that calculates the surface area of the Sphere using the following formula: 4 * PI * r**2; the function MUST reuse the areaOfCircle function below
// */
//
// // areaOfCirle function; do not modify
// function areaOfCircle(radius){
//   return Math.PI * (radius**2)
// }
//
//
// function surfaceAreaOfSphere(radius){
//   // Add your code here
//   return areaOfCircle(radius) * 4
// }
//
// const sphereSurfaceArea = surfaceAreaOfSphere(10)
//
// console.log(`surface area of a sphere ${sphereSurfaceArea}`)


const getArea = function(width, height) {
  return width * height
}

// Calling the getArea() function with values
console.log(getArea(7, 5)) // returns 35

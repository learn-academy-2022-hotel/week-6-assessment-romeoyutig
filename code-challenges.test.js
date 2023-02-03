// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest


// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test pon                                                                         hjdriven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.

const people = [
  { name: "ford prefect", occupation: "a hitchhiker" },
  { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
  { name: "arthur dent", occupation: "a radio employee" }
]
// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."] 

// describe("sentenceMaker", () => {
//   it("returns an array with a sentence about each person with their name capitalized.", () => {
//     expect(sentenceMaker(people)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])
//   })
// })

// ReferenceError: sentenceMaker is not defined
// good test

// b) Create the function that makes the test pass.

// pseudo code: declare a function called sentenceMaker
// input: array of objects
// output: string
// process: use .map() with the array, key and symbol as the arguments, 
// return a string with the information provided in the test variable using string interpolation

const sentenceMaker = (arr) => {
  let firstPart = arr.map(obj => {
    let secondPart = obj.name.split(" ").map(str => str[0].toUpperCase() + str.substring(1)).join(" ")
    return `${secondPart} is ${obj.occupation}`
  })
  return firstPart
}
  console.log(sentenceMaker(people))

// Had a blocker here, I'm able to extract the obj, however it returns the array twice. I was planning on transforming each element into a string (.join)? , and then using .toUpperCase on index zero, then perhaps splicing the strings together, then using string interpolation and transform back into an array. also don't think i had the right arguments initially for my .map() function.

// After getting guidance, decided to map the array in one variable called firstPart
// declare another variable called secondPart
// reference the key value pair and use the method .split to split the array
// map over the array, transforming the array value at index 0 and capitalize it using.toUppeCase
// join the rest of the string calling on .substring from index 1, to the rest of the string, and the .join() method
// use string interpolation to reference the variable secondPart, as well as referencing the other key value pair with obj.occupation
// 
// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.

const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
// Expected output: [ 2, 0, -1, 0 ]
const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]

// describe("remainders", () => {
//   it("returns an array of only the REMAINDERS of the numbers when divided by 3", () => {
//     expect(remainders(hodgepodge1)).toEqual([ 2, 0, -1, 0 ])
//   })
// })

// ReferenceError: remainders is not defined
// good test


// b) Create the function that makes the test pass.

// pseudo code:
// input: an array of numbers, strings, and booleans
// output: number (remainder of the numbers, when divided by 3)
// use .filter() method to filter array
// use modulo operator to find remainders of the numbers that are filtered.

const remainders = (array) => {
  let numberCheck = (array.filter(array => typeof array === "number"))
    return numberCheck.map(num => num %3)
  
}

// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.

const cubeAndSum1 = [2, 3, 4]
// Expected output: 99
const cubeAndSum2 = [0, 5, 10]
// Expected output: 1125

// describe("cuber" , () => {
//   it("takes in an array of numbers and returns the sum of all the numbers cubed", () => {
//     expect(cuber(cubeAndSum1)).toEqual(99)
//   })
// })

// ReferenceError: cuber is not defined
// good test



// b) Create the function that makes the test pass.

// pseudo code: declare a function called cuber
// input: array of numbers
// output: number (sum of those numbers cubed)
// process:use a for loop to iterate over the array one at a time, starting from 0 and stopping at the length of the parameter
// have the arrays element cube itself (multiplying itself three times)
// use the method .reduce() that takes in an an accumulator, and current value, as well as a initial value as arguments
// return that method to run on the array provided as the cuber argument

const cuber = (array) => {
  for(let i = 0; i < array.length; i++) {
    array[i] = array[i]*array[i]*array[i]
  }
  return array.reduce((a, b) => a + b, 0)
}
// console.log(cuber(cubeAndSum1))
// console.log(cuber(cubeAndSum2))
// The push() method adds one or more elements to the end of an array and returns the new length of the array.

//SYNTAX
push(element0)
push(element0, element1)
push(element0, element1, ... , elementN)

//EXAMPLES

//Adding elements to an array
let sports = ['soccer', 'baseball']
let total = sports.push('football', 'swimming')

console.log(sports)  // ['soccer', 'baseball', 'football', 'swimming']
console.log(total)   // 4
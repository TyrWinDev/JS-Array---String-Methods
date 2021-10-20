// The reduce() method executes a user-supplied "reducer" callback function on each element of the array, passin in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.

// SYNTAX
// Arrow function
reduce((previousValue, currentValue) => { ... } )
reduce((previousValue, currentValue, currentIndex) => { ... } )
reduce((previousValue, currentValue, currentIndex, array) => { ... } )
reduce((previousValue, currentValue, currentIndex, array) => { ... }, initialValue)

// Callback function
reduce(callbackFn)
reduce(callbackFn, initialValue)

// Inline callback function
reduce(function callbackFn(previousValue, currentValue) { ... })
reduce(function callbackFn(previousValue, currentValue, currentIndex) { ... })
reduce(function callbackFn(previousValue, currentValue, currentIndex, array){ ... })
reduce(function callbackFn(previousValue, currentValue, currentIndex, array) { ... }, initialValue)

// PARAMETERS 
callbackFn // A “reducer” function that takes four arguments:
    previousValue //(the value resulting from the previous call to callbackfn)
    currentValue //(the value of the current element)
    currentIndex //Optional
    array //(the array to traverse) Optional
initialValue //Optional
// A value to which previousValue is initialized the first time the callback is called. If initialValue is specified, that also causes currentValue to be initialized to the first value in the array. If initialValue is not specified, previousValue is initialized to the first value in the array, and currentValue is initialized to the second value in the array.

// EXAMPLES

//Sum of all the values in an array
let sum = [0, 1, 2, 3].reduce(function (previousValue, currentValue) {
    return previousValue + currentValue
  }, 0)
  // sum is 6

// Arrow Function
let initialValue = 0
let sum = [{x: 1}, {x: 2}, {x: 3}].reduce(
    (previousValue, currentValue) => previousValue + currentValue.x
    , initialValue
)

console.log(sum) // logs 6
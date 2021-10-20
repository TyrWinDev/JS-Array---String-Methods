// The map() method creates a new array populated with the results of calling a provided function on veery element in the calling array. 

// SYNTAX
// Arrow function
map((element) => { ... })
map((element, index) => { ... })
map((element, index, array) => { ... })

// Callback function
map(callbackFn)
map(callbackFn, thisArg)

// Inline callback function
map(function callbackFn(element) { ... })
map(function callbackFn(element, index) { ... })
map(function callbackFn(element, index, array){ ... })
map(function callbackFn(element, index, array) { ... }, thisArg)

// PARAMETERS

callbackFn // Function thats is called for every element of arr. Each time callbackFn executes, the returned value is added to newArray

    element // The current element being processed in the array.

    index // OPTIONAL. the index of the element in the array.

    array // OPTIONAL. the array forEach() was called upon.

thisArg // OPTIONAL. Value to use as this when executing callbackFn

// EXAMPLES
let numbers = [1, 4, 9]
let roots = numbers.map(function(num) {
    return Math.sqrt(num)
})

// roots is now [1, 2, 3]
// numbers is still [1, 4, 9]
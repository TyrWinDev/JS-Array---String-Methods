// The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.

//SYNTAX
// Arrow function
every((element) => { ... } )
every((element, index) => { ... } )
every((element, index, array) => { ... } )

// Callback function
every(callbackFn)
every(callbackFn, thisArg)

// Inline callback function
every(function callbackFn(element) { ... })
every(function callbackFn(element, index) { ... })
every(function callbackFn(element, index, array){ ... })
every(function callbackFn(element, index, array) { ... }, thisArg)

//PARAMETERS
callbackFn
// A function to test for each element, taking three arguments:

    element
    // The current element being processed in the array.

    index //Optional
    // The index of the current element being processed in the array.

    array //Optional
    // The array every was called upon.

thisArg //Optional
// A value to use as this when executing callbackFn.

//EXAMPLES

// Testing size of all array elements
function isBigEnough(element, index, array) {
    return element >= 10;
  }
  [12, 5, 8, 130, 44].every(isBigEnough);   // false
  [12, 54, 18, 130, 44].every(isBigEnough); // true

//Check if one array is a subset of another aray 
function isSubset(array1, array2) {
    // returns true if array2 is a subset of array1
    
    return array2.every(function (element) {
      return array1.includes(element);
    });
  }
  
  console.log(isSubset([1, 2, 3, 4, 5, 6, 7], [5, 7, 6])); // true
  console.log(isSubset([1, 2, 3, 4, 5, 6, 7], [5, 8, 7])); // false
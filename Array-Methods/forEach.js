//The forEach() method executes a provided function once for each array element. 

//SYNTAX

//Arrow Function
forEach((element) => {...})
forEach ((element, index) => {...})
forEach ((element, index, array) => {...})

//Callback Function
forEach(callBackfn)
forEach(callBackfn, thisArg)

//Inline callback function
forEach(function callbackFn(element) {...})
forEach(function callbackFn(element, index) {...})
forEach(function callbackFn(element, index, array) {...})
forEach(function callbackFn(element, index, array) {...}, thisArg)

//PARAMETERS
callbackFn //Function to execute on each element. It accepts between one and three arguments.

    element // The current element being processed in the array.

    index // OPTIONAL. the index of the element in the array.

    array // OPTIONAL. the array forEach() was called upon.

thisArg // OPTIONAL. Value to use as this when executing callbackFn

//EXAMPLES
const arrarSparse = [1, 3, , 7]
let numCallbackRuns = 0

arraySparse.forEach(function(element) {
    console.log(element)
    numCallbackRuns++
})

console.log('numCallbackRuns', numCallbackRuns)
//OUTPUT
// 1
// 3
// 7
// numCallbackRuns: 3
//The missing value between 3 and 7 didnt invoke callback function. 


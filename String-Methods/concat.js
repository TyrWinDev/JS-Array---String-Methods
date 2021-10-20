// The concat() method concatenates the string arguments to the calling string and returns a new string.

//SYNTAX
concat(str1)
concat(str1, str2)
concat(str1, str2, ... , strN)

//PARAMETERS
strN // One or more strings to concatenate to str.

//EXAMPLES
let hello = 'Hello, '
console.log(hello.concat('Kevin', '. Have a nice day.'))
// Hello, Kevin. Have a nice day.

let greetList = ['Hello', ' ', 'Venkat', '!']
"".concat(...greetList)  // "Hello Venkat!"

"".concat({})    // [object Object]
"".concat([])    // ""
"".concat(null)  // "null"
"".concat(true)  // "true"
"".concat(4, 5)  // "45"
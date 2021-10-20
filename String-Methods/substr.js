// The substr() method returns a portion of the string, starting at the specified index and extending for a given number of characters afterwards.

//SYNTAX
substr(start);
substr(start, length);

//PARAMETERS
start;
// The index of the first character to include in the returned substring.

length;
// Optional. The number of characters to extract.

//EXAMPLES
let anyString = "Mozilla";

var aString = "Mozilla";

console.log(aString.substr(0, 1)); // 'M'
console.log(aString.substr(1, 0)); // ''
console.log(aString.substr(-1, 1)); // 'a'
console.log(aString.substr(1, -1)); // ''
console.log(aString.substr(-3)); // 'lla'
console.log(aString.substr(1)); // 'ozilla'
console.log(aString.substr(-20, 2)); // 'Mo'
console.log(aString.substr(20, 2)); // ''

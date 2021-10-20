//The slice() method extracts a section of a string and returns it as a new string, without modifying the original string.

//SYNTAX
slice(beginIndex);
slice(beginIndex, endIndex);

//PARAMETERS
beginIndex;
// The zero-based index at which to begin extraction.

// If beginIndex is negative, slice() begins extraction from str.length + beginIndex. (E.g. "test".slice(-2) returns "st")

// If beginIndex is omitted, undefined, or cannot be converted to a number (using Number(beginIndex)), slice() begins extraction from the beginning of the string. (E.g. "test".slice() returns "test")

// If beginIndex is greater than or equal to str.length, an empty string is returned. (E.g. "test".slice(4) returns "")

endIndex; //Optional
// The zero-based index before which to end extraction. The character at this index will not be included.

// If endIndex is omitted, undefined, or cannot be converted to a number (using Number(endIndex)) slice() extracts to the end of the string. (E.g. "test".slice(2) returns "st")

// If endIndex is greater than str.length, slice() also extracts to the end of the string. (E.g. "test".slice(2, 10) returns "st")

// If endIndex is negative, slice() is treated as str.length + endIndex. (E.g, if endIndex is -2, it is treated as str.length - 2 and "test".slice(1, -2) returns "e") .

// If endIndex represents a position that is before the one represented by startIndex, slice() returns "". (E.g "test".slice(2, -10), "test".slice(-1, -2) or "test".slice(3, 2)).

//EXAMPLES

//Using slice() to create a new string
let str1 = "The morning is upon us.", // the length of str1 is 23.
  str2 = str1.slice(1, 8),
  str3 = str1.slice(4, -2),
  str4 = str1.slice(12),
  str5 = str1.slice(30);
console.log(str2); // OUTPUT: he morn
console.log(str3); // OUTPUT: morning is upon u
console.log(str4); // OUTPUT: is upon us.
console.log(str5); // OUTPUT: ""

// Using slice() with negative indexes
let str = "The morning is upon us.";
str.slice(-3); // returns 'us.'
str.slice(-3, -1); // returns 'us'
str.slice(0, -1); // returns 'The morning is upon us'

console.log(str.slice(-11, 16)); // => "is u"

console.log(str.slice(11, -7)); // => " is u"

console.log(str.slice(-5, -1)); // => "n us"

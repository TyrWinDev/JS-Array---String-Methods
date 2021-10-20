//The search() method executes a search for a match between a regular expression and this String object.

//SYNTAX
search(regexp);

//PARAMETERS
regexp;
// A regular expression object.

// If a non-RegExp object regexp is passed, it is implicitly converted to a RegExp with new RegExp(regexp).

//EXAMPLES
let str = "hey JudE";
let re = /[A-Z]/g;
let reDot = /[.]/g;
console.log(str.search(re)); // returns 4, which is the index of the first capital letter "J"
console.log(str.search(reDot)); // returns -1 cannot find '.' dot punctuation

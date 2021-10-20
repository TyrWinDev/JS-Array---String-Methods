//The toUpperCase() method returns the calling string value converted to uppercase (the value will be converted to a string if it isn't one).

//SYNTAX
toUpperCase();

//EXAMPLES
console.log("alphabet".toUpperCase()); // 'ALPHABET'

//Conversion of non string values to strings
const a = String.prototype.toUpperCase.call({
  toString: function toString() {
    return "abcdef";
  },
});

const b = String.prototype.toUpperCase.call(true);

// prints out 'ABCDEF TRUE'.
console.log(a, b);

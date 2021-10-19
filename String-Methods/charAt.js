//The charAt() method returns a new string consisting of the single UTF-16 code unit located at the specified offset into the string.

//SYNTAX
chartAt(index);

//PARAMETERS
index; //An integer between 0 and str.length - 1. If the index cannot be converted to the integer or no index is provided, the default is 0, so the first character of str is returned.

//DESCRIPTION
//Characters and indexed from left to right. The index of the first character is 0, and the index of the last character is stringName.length - 1. If the index suppllied is out of range, JS returns an empty string.

//EXAMPLES

let anyString = "Brave new world";
console.log("The character at index 0 is", +anyString.charAt() + "");
//No index provided, used 0 as default.
//The character at index 0 is "B"

console.log("The character at index 1 is", +anyString.charAt(1) + "");
//The character at index 1 is "r"
console.log("The character at index 2 is", +anyString.charAt(2) + "");
//The character at index 2 is "a"
console.log("The character at index 3 is", +anyString.charAt(3) + "");
//The character at index 3 is "v"
console.log("The character at index 4 is", +anyString.charAt(4) + "");
//The character at index 4 is "e"
console.log(
  "The character the last index is",
  +anyString.charAt(anyString.length - 1) + ""
);
//The character at the last index is "d"
console.log("The character at index 999 is", +anyString.charAt(999) + "");
//The character at index 999 is " "

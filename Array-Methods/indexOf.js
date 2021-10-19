//The indexOf() returns the first index at which a given element can be found in the array, or -1 if it's not present.

//SYNTAX
indexOf(searchElement); //Element to locate in the array
indexOf(searchElement, fromIndex); //The index to start the search at.

//EXAMPLES
const beasts = ["ant", "bison", "camel", "duck", "bison"];

console.log(beasts.indexOf("bison"));
// expected output: 1

// start from index 2
console.log(beasts.indexOf("bison", 2));
// expected output: 4

console.log(beasts.indexOf("giraffe"));
// expected output: -1

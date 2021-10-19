//The includes() method determines whether an array includes a certain value among its entrie, returning true or flase as appropiate.

//SYNTAX
includes(searchElement); //The value to search for
includes(searchElement, fromIndex); //The position in this array to begin searching for searchElement

//EXAMPLE
const array1 = [1, 2, 3];

console.log(array1.includes(2));
// expected output: true

const pets = ["cat", "dog", "bat"];

console.log(pets.includes("cat"));
// expected output: true

console.log(pets.includes("at"));
// expected output: false

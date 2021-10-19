//The join() method creates and returns a new string by concatenating all of the elements in an array, separated by commas or a specified separator string.

//SYNTAX
join();
join(separator);

//EXAMPLES
const elements = ["Fire", "Air", "Water"];

console.log(elements.join());
// expected output: "Fire,Air,Water"

console.log(elements.join(""));
// expected output: "FireAirWater"

console.log(elements.join("-"));
// expected output: "Fire-Air-Water"

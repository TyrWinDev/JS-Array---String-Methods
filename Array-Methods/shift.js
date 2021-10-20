// The shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.

//SYNTAX
shift();

//EXAMPLES

//Removing an element from an array
var myFish = ["angel", "clown", "mandarin", "surgeon"];

console.log("myFish before:", JSON.stringify(myFish));
// myFish before: ['angel', 'clown', 'mandarin', 'surgeon']

var shifted = myFish.shift();

console.log("myFish after:", myFish);
// myFish after: ['clown', 'mandarin', 'surgeon']

console.log("Removed this element:", shifted);
// Removed this element: angel

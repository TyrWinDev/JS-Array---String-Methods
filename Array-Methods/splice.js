//The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

//SYNTAX
splice(start); //Index at which to start chaing the array.
splice(start, deleteCount); //Indicates the number of elements in the array to remove from start.
splice(start, deleteCount, item1);
splice(start, deleteCount, item1, item2, itemN); //The elements to add to the array beginning from the start.

//EXAMPLES
const months = ["Jan", "March", "April", "June"];
months.splice(1, 0, "Feb");
// inserts at index 1
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, "May");
// replaces 1 element at index 4
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "May"]

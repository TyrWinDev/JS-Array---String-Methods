//The sort() method sorts the elements of an array in place and returns the sorted array.

//SYNTAX
// Functionless
sort()

// Arrow function
sort((firstEl, secondEl) => { ... } )

//EXAMPLES
const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);
// expected output: Array ["Dec", "Feb", "Jan", "March"]

const array1 = [1, 30, 4, 21, 100000];
array1.sort();
console.log(array1);
// expected output: Array [1, 100000, 21, 30, 4]
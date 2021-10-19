// The concact() method is usd to merge two or more arrays. This does not change the existing arrays, but insted it returns a new one.

//SYNTAX
concat();
concat(value0);
concat(value0, value1);

const array1 = ["a", "b", "c"];
const array2 = ["d", "e", "f"];
const array3 = array1.concat(array2);

console.log(array3);
// expected output: Array ["a", "b", "c", "d", "e", "f"]

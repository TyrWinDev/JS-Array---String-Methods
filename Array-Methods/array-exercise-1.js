// Given a non-empty array of integers, return the result of multiplying the values together in order. Example: [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

let integers = [1, 2, 3, 4, 5];

let product = integers.reduce((total, num) => total * num);
console.log(product);
//Expected output 120

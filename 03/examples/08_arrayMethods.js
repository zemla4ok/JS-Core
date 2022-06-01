const array = [ 2, 5, 8];

array.push(1);
console.log(array); // [ 2, 5, 8, 1 ]
array.pop();
console.log(array); // [ 2, 5, 8 ]

array.unshift(9);
console.log(array); // [ 9, 2, 5, 8 ]
array.shift();
console.log(array); // [ 2, 5, 8 ]

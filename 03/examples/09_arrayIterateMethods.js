[].forEach((element, index, array) => { /* ... */ });

["Bilbo", "Gandalf", "Nazgul"]
.forEach((item, index, array) => {
  console.log(`${index}: ${item}`);
});

// =========================================================

[].filter((element, index, array) => { /* ... */ } );

const words = ['spray', 'limit', 'destruction', 'present'];

const res = words.filter(word => word.length > 6);

console.log(res);
// ["destruction", "present"]

// =========================================================

[].map((element, index, array) => { /* ... */ });

const array1 = [1, 4, 9, 16];

const map1 = array1.map(x => x * 2);

console.log(map1); // [2, 8, 18, 32]

// =========================================================

[].find((element, index, array) => { /* ... */ } );

const array2 = [5, 12, 8, 130, 44];

const found = array2.find(element => element > 10);

console.log(found); // 12

// =========================================================

[].reduce((prevValue, currValue, currIndex, array) => { /* ... */ } );

const array3 = [1, 2, 3, 4];

const initialValue = 0;
const sumWithInitial = array3.reduce(
  (prev, curr) => prev + curr,
  initialValue
);

console.log(sumWithInitial); // 10

// =========================================================

[].every((element, index, array) => { /* ... */ } );
[].some((element, index, array) => { /* ... */ } );

const isBelowThreshold = (currentValue) => currentValue < 40;

const array4 = [1, 30, 39, 29, 10, 13];

console.log(array1.every(isBelowThreshold)); // true
console.log(array1.some(isBelowThreshold)); // true


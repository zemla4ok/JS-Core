const obj = { foo: 'bar' };
const obj2 = { foo: 'bar' };

console.log(obj == obj2); // true
console.log(obj === obj2); // false
console.log(Object.is(obj, obj2)); // false
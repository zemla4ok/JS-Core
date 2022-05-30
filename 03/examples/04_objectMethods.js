// Object.keys(object)
const object = {
  field: 123,
  foo: 'bar',
}

const keys = Object.keys(object);
console.log(keys); // ['field', 'foo'];

// ====================================================

// Object.values(object)
const object = {
  field: 123,
  foo: 'bar',
}

const keys = Object.values(object);
console.log(keys); // [123, 'bar'];

// ====================================================

// Object.entries(object)
const object = {
  field: 123,
  foo: 'bar',
}

const keys = Object.entries(object);
console.log(keys);
// [['field', 123], ['foo', 'bar']];

// ====================================================

// Object.entries(object)
Object.is(25, 25);                // true
Object.is('foo', 'foo');          // true
Object.is('foo', 'bar');          // false
Object.is(null, null);            // true
Object.is(undefined, undefined);  // true
Object.is(window, window);        // true
Object.is([], []);                // false
const foo = { a: 1 };
const bar = { a: 1 };
Object.is(foo, foo);              // true
Object.is(foo, bar);              // false
// Явное приведение
console.log(String(123.45));  // '123.45'
console.log(12..toString());        // '12'
console.log(12..toString(2)); // '1100'
console.log((-67.89).toString());   // '-67.89'

// Неявное приведение
console.log(1234 + ''); // 1234
console.log(-1234 + 1); // -1234
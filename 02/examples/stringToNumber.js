// Явное
console.log(Number('100'));  // 100
console.log(Number('12ab'));  // NaN
console.log(parseInt('123.123')); // 123
console.log(parseInt('55', 7)); // 40
console.log(parseFloat('67.89')); // 67.89
console.log(parseFloat('67.89asd')); // 67.89



// Неявное
console.log(+'12'); // 12
console.log(+'-12.34'); // -12.34
console.log(2 > '3'); // false
console.log(13 <= '123.4'); // true
console.log(5 - '4'); // 1

// Явное
console.log(Boolean(153.22)); // true
console.log(Boolean(null)); // false
console.log(Boolean([])); // true
console.log(Boolean('Some text...')); // true
console.log(Boolean('')); // false


// Неявное
console.log(!!0);  // false
console.log(!!{}); // true
if ('Some text...') {
  console.log('string is not empty'); // 'string is not empty'
}
if (undefined) {
  console.log('Never...'); // не будет залогировано
}
console.log(2 || null);  // 2
console.log(0 && 'foo'); // 0
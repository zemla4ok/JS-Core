// Всплытие (5)
console.log(someValue); // Error
// Инициализация (2)
let someValue;
// Изменяемость (1)
someValue = 123;
someValue = 'some string';
someValue = true;
// Многократное создание (4)
let someValue = 'another string'; // Error




// ************************************

// Область видимости (3)
console.log(interbalVariable); // Error
function doSmth() {
  console.log(interbalVariable); // Error
  let interbalVariable = 123;
  console.log(interbalVariable); // 123
}

console.log(variableInCondition); // Error
if (true) {
  let variableInCondition = 'hello';
}
console.log(variableInCondition); // Error
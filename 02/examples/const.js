// Всплытие (5)
console.log(someValue); // Error
// Инициализация (2)
const someValue = 100;
// Изменяемость (1)
someValue = 123; // Error
someValue = 'some string'; // Error
someValue = true; // Error
// Многократное создание (4)
const someValue = 'another string'; // Error




// ************************************

// Область видимости (3)
console.log(interbalVariable); // Error
function doSmth() {
  console.log(interbalVariable); // Error
  const interbalVariable = 123;
  console.log(interbalVariable); // 123
}

console.log(variableInCondition); // Error
if (true) {
  const variableInCondition = 'hello';
}
console.log(variableInCondition); // Error
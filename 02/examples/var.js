// Всплытие (5)
console.log(someValue); // undefined
// Инициализация (2)
var someValue;
// Изменяемость (1)
someValue = 123;
someValue = 'some string';
someValue = true;
// Многократное создание (4)
var someValue = 'another string';
// Сторонние эффекты[оседают в window] (6)
console.log(someValue); // 'another string'



// ************************************

// Область видимости (3)
console.log(interbalVariable); // Error
function doSmth() {
  console.log(interbalVariable); // undefined
  var interbalVariable = 123;
  console.log(interbalVariable); // 123
}

console.log(variableInCondition); // undefined
if (true) {
  var variableInCondition = 'hello';
}
console.log(variableInCondition); // 'hello'
// Может начинаться с:
const variable = 1;  // буквы
const _variable = 2; // нижнего подчеркивания(underscore)
const $variable = 3; // знака доллара($)

let myVariable = 4;   // camelCase для переменных
const MY_CONSTANT = 5 // CONSTANT_CASE для констант

// PascalCase для функций-конструкторов и классов
function User(name) {
  this.name = name;
}
class Animal {}
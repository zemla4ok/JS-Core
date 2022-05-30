// Литеральная форма
const emptyObject = {};
const user = {
  id: 1,
  firstName: 'Dmitry',
  lastName: 'Kotovich',
  createdAt: new Date(),
}

// ======================================================

// Ключевое слово new
// Встроенные функции конструкторы(не используется)
const emptyObject = new Object();
const oneHundredAsObject = new Number(100);
const emptyStringAsObject = new String('');
const falseAsObject = new Boolean(false);

// ======================================================

// Ключевое слово new
// Пользовательские функции конструкторы
const coolObject = new MyCoolObject();
const dmitry = new Person('Dmitry', 'Kotovich');

function MyCoolObject() {
  this.isCool = true;
}
class Person {
  constructor(firstName, lastName) {
    this.firstname = firstName;
    this.lastName = lastName;
  }
}

// ======================================================

// Встроенные методы
// Object.create(proto, ?props)
const pureObject = Object.create(null);
const simpleObject = Object.create({});
const objectWithName = Object.create({}, {
  name: {
    enumerable: true,
    value: 'Dmitry'
  }
});

// ======================================================

// Встроенные методы
// Object.assign(targetObject, ...sourceObjects)
const someObject = { foo: 'bar' };
const someObjCopy = Object.assign({}, someObject);
const dmitry = Object.assign(
  {},
  { firstname: 'Dmitry' },
  { lastName: 'Kotovich' }
);
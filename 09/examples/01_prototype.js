const user = { id: 123 };

const person = {
  name: 'Dmitry',
  surname: 'Kotovich',
  sayHi() {
    console.log(`Hello, ${this.name} ${this.surname}`);
  }
}

user.__proto__ = person;

console.log(user.name); // 'Dmitry'
user.sayHi(); // Hello, Dmitry Kotovich
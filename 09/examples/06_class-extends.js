class Employee {}
class Manager extends Employee {}
function Person(name) {
  this.name = name;
}
class User extends Person {}
const Animal = {
  speak() { console.log(`${this.name} makes some noise!`) }
}
class Dog {
  constructor(name) { this.name = name }
}
Object.setPrototypeOf(Dog.prototype, Animal);
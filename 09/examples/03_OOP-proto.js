const uuid = require('uuid');

function Employee(name, surname, position) {
  this._id = uuid.v4();
  this._name = name;
  this._surname = surname;
  this._position = position;
}
Employee.prototype.getFullName = function() {
  return `${this._name} ${this._surname}`;
}
Employee.prototype.startWorking = function() {
  console.log(`Employee ${this.getFullName()} has started his work`);
}




function Manager(name, surname, position = "MANAGER") {
  Employee.apply(this, arguments);

  this._permissions = ['Hire', 'Fire']
}
Manager.prototype = Object.create(Employee.prototype);
Manager.prototype.constructor = Manager;

Manager.prototype.hireEmployee = function(employee) {
  // logic here
};
Manager.prototype.fireEmployee = function(employee) {
  // logic here
};
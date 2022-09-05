class Employee {
  constructor(name) {
    this.id = uuid.v4();
    this.name = name;
  }
}
class Manager extends Employee {
  constructor(props) {
    console.log(this.name); // 'this' is not allowed before superclass constructor invocation
    super(props);
    console.log(this.name); // value of this.name
  }
}
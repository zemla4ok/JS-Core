class Employee {
  #id;
  #name;
  static EMPLOYEE_PREFIX = 'employee-';

  constructor(name) {
    this.#id = uuid.v4();
    this.#name = name;
  }

  static compare(epl1, empl2) { /* ... */ }
  work() { /* ... */ }
}
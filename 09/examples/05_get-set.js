class Employee {
  #age;

  set age(value) {
    if (value < 18) throw new Error("Too young!");
    if (value > 65) throw new Error("Too old!");
    this.#age = value;
  }

  get age() {
    return this.#age;
  }
}
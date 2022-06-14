function logThis() {
  console.log(this);
}
logThis(); // global this

const obj = {
  value: 123,
  logThis
}
obj.logThis(); // obj

// ======================== arrow functions ========================

const logThis = () => console.log(this);
logThis(); // global this

const obj = {
  value: 123,
  logThis
}
obj.logThis(); // global this
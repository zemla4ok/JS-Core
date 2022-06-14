console.log(innerVar); // Error!
function anyFunc() {
  var innerVar = 'Hi!';
}
console.log(innerVar); // Error!

const numbers = [1, 2, 3];
for (let index = 0; index < numbers.length; index++) {
  console.log(index);
}
console.log(index); // Error!
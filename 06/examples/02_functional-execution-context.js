function outerFunction() {
  const innerCalculation = 10 + 25;
  console.log(innerCalculation); // 35

  return innerFunction;
  function innerFunction() {
    return calcSquare(10);
  }
}

console.log(outerFunction());
function calcSquare(x) { return x ^ 2 }
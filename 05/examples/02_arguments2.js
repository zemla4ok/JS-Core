function directAccess(argA, argB, argC) {
  console.log(argA, argB, argC);
}

function withArguments() {
  for (const arg of arguments) {
    console.log(arg);
  }
}

function withRest(...args) {
  for (const arg of args) {
    console.log(arg);
  }
}

function withPartialRest(argA, argB, ...args) {
  console.log(argA, argB);
  for (const arg of args) {
    console.log(arg);
  }
}
function getFunction() {
  return () => console.log('Hi!');
}

function throwError() {
  throw new Error('My Error');
}

function handleError() {
  try {
    throwError();
  } catch(e) {
    console.error(e);
  }
}
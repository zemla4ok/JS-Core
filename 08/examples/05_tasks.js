console.log('one');

setTimeout(function() {
  console.log('two');
}, 0);

Promise.resolve().then(function() {
  console.log('three');
})

console.log('four');

// one  four  three  two
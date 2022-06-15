console.log('job started');

xyz((r) => {
  console.log('result: ' + r);

  console.log('job done');
});

console.log('job in progress');

function xyz(cb) {
  setTimeout(() => { cb(42); }, 10);
}
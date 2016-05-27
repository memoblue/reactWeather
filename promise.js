// just a test to better anderstand promise

function add(a, b) {
  return new Promise(function(yes, nop) {
    if (typeof a === 'number' && typeof b === 'number') {
      yes(a + b)
    } else {
      nop('not numbers')
    }
  });
}

add(4, 4).then(function(sum) {
  console.log('Success', sum);
}, function(err) {
  console.log('Error', err);
});

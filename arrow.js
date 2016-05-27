var names = ['Marc', 'Ania', 'Naima'];

// syntax --------------------------

// names.forEach(function(name) {
//   console.log('name: ', name);
// });
//
// names.forEach((name) => {
//   console.log('arrow name: ', name);
// });
//
// names.forEach((name) => console.log(name));

// return --------------------------
// var dontReturnMe = function(name) {
//   name + '!';
// }
// var returnMe = (name) => name + '!';
//
// console.log('Arrow', returnMe('Yann'));
// console.log('Old School', dontReturnMe('Yann'));

// this --------------------------
// var person = {
//   name: 'Yann',
//   undefinedGreet: function() {
//     names.forEach(function(name) {
//       console.log(this.name + ' says hi to ' + name);
//     });
//   },
//   greet: function() {
//     names.forEach((name) => {
//       console.log(this.name + ' says hi to ' + name);
//     });
//   }
// };
//
// person.undefinedGreet(); // you need `var that = this` trick
// person.greet();

// challenge --------------------------

function add(a, b) {
  return a + b;
}

var addStatement = (a, b) => {
  return a + b;
};

var addExpression = (a, b) => a + b;

console.log(add(2,2));
console.log(addStatement(2,2));
console.log(addExpression(2,2));

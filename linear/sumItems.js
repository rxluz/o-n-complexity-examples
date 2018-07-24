/* return the sum of itens inside an array */

//es6+
const sumItemsES6 = arr => arr.reduce((acum, item) => acum + item, 0);

//es5
var sumItemsES5 = function(arr) {
  var total = 0;

  for (var x = 0; x < arr.length; x++) {
    total = total + arr[x];
  }

  return total;
};

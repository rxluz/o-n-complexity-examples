/* return a list of unique words in a array */

//es6+
const uniqueWordsES6 = arr =>
  arr.filter(elem => arr.filter(e => e === elem).length === 1);

//es5
var uniqueWordsES5 = function(arr) {
  var uniqueWords = [];

  for (var x = 0; x < arr.length; x++) {
    var occurences = 0;

    for (var y = 0; y < arr.length; y++) {
      if (arr[y] === arr[x]) {
        occurences++;
      }
    }

    if (occurences === 1) {
      uniqueWords.push(arr[x]);
    }
  }

  return uniqueWords;
};

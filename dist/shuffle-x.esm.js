import toObject from 'to-object-x';
import slice from 'array-slice-x';
var floor = Math.floor,
    random = Math.random;
/**
 * Creates an array of shuffled values.
 *
 * @see {@link https://en.wikipedia.org/wiki/Fisher-Yates_shuffle}
 * @param {Array|object} array - The array to shuffle.
 * @throws {TypeError} If array is null or undefined.
 * @returns {Array} Returns the new shuffled array.
 */

var shuffle = function shuffle(array) {
  var arr = slice(toObject(array));
  var index = arr.length;

  while (index > 0) {
    var rnd = floor(random() * index);
    index -= 1;
    var tmp = arr[index];
    arr[index] = arr[rnd];
    arr[rnd] = tmp;
  }

  return arr;
};

export default shuffle;

//# sourceMappingURL=shuffle-x.esm.js.map
import toObject from 'to-object-x';
import slice from 'array-slice-x';
/**
 * Creates an array of shuffled values.
 *
 * @see {@link https://en.wikipedia.org/wiki/Fisher-Yates_shuffle}
 * @param {Array|object} array - The array to shuffle.
 * @throws {TypeError} If array is null or undefined.
 * @returns {Array} Returns the new shuffled array.
 */

export default function shuffle(array) {
  var arr = slice(toObject(array));
  var index = arr.length;

  while (index > 0) {
    var rnd = Math.floor(Math.random() * index);
    index -= 1;
    var tmp = arr[index];
    arr[index] = arr[rnd];
    arr[rnd] = tmp;
  }

  return arr;
}

//# sourceMappingURL=shuffle-x.esm.js.map
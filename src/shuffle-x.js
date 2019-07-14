/**
 * @file Creates an array of shuffled values.
 * @version 1.4.0
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module shuffle-x
 */

const toObject = require('to-object-x');
const slice = require('array-slice-x');

/**
 * Creates an array of shuffled values.
 *
 * @see {@link https://en.wikipedia.org/wiki/Fisher-Yates_shuffle}
 * @param {Array|object} array - The array to shuffle.
 * @throws {TypeError} If array is null or undefined.
 * @returns {Array} Returns the new shuffled array.
 * @example
 * var shuffle = require('shuffle-x');
 *
 * shuffle([1, 2, 3, 4]); // => [4, 1, 3, 2]
 */
module.exports = function shuffle(array) {
  const arr = slice(toObject(array));
  let index = arr.length;
  while (index > 0) {
    const rnd = Math.floor(Math.random() * index);
    index -= 1;
    const tmp = arr[index];
    arr[index] = arr[rnd];
    arr[rnd] = tmp;
  }

  return arr;
};

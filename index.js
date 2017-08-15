/**
 * @file Creates an array of shuffled values.
 * @version 1.3.0
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module shuffle-x
 */

'use strict';

var toObject = require('to-object-x');
var slice = require('array-slice-x');

var $shuffle = function shuffle(array) {
  var object = toObject(array);
  var arr = slice(object);
  var index = arr.length;
  while (index > 0) {
    var rnd = Math.floor(Math.random() * index);
    index -= 1;
    var tmp = arr[index];
    arr[index] = arr[rnd];
    arr[rnd] = tmp;
  }

  return arr;
};

/**
 * Creates an array of shuffled values.
 *
 * @see {@link https://en.wikipedia.org/wiki/Fisher-Yates_shuffle}
 * @param {Array|Object} array The array to shuffle.
 * @throws {TypeError} If array is null or undefined.
 * @returns {Array} Returns the new shuffled array.
 * @example
 * var shuffle = require('shuffle-x');
 *
 * shuffle([1, 2, 3, 4]); // => [4, 1, 3, 2]
 */
module.exports = $shuffle;

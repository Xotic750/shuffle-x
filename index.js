/**
 * @file Creates an array of shuffled values.
 * @version 1.0.0
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module shuffle-x
 */

'use strict';

var slice = require('array-slice-x');
var isString = require('is-string');

var $shuffle = function shuffle(array) {
  var obj = isString(array) ? array.split('') : slice(array);
  var i = obj.length;
  while (i) {
    var rnd = Math.floor(Math.random() * i);
    i -= 1;
    var tmp = obj[i];
    obj[i] = obj[rnd];
    obj[rnd] = tmp;
  }

  return obj;
};

/**
 * Creates an array of shuffled values.
 *
 * @see {@link https://en.wikipedia.org/wiki/Fisher-Yates_shuffle}
 * @param {Array|Object} array The array to shuffle.
 * @returns {Array} Returns the new shuffled array.
 * @example
 * var shuffle = require('shuffle-x');
 *
 * shuffle([1, 2, 3, 4]); // => [4, 1, 3, 2]
 */
module.exports = $shuffle;

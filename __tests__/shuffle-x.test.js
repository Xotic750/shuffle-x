let shuffle;

if (typeof module === 'object' && module.exports) {
  require('es5-shim');
  require('es5-shim/es5-sham');

  if (typeof JSON === 'undefined') {
    JSON = {};
  }

  require('json3').runInContext(null, JSON);
  require('es6-shim');
  const es7 = require('es7-shim');
  Object.keys(es7).forEach(function(key) {
    const obj = es7[key];

    if (typeof obj.shim === 'function') {
      obj.shim();
    }
  });
  shuffle = require('../../index.js');
} else {
  shuffle = returnExports;
}

describe('shuffle', function() {
  let array;
  let object;
  let string;

  beforeEach(function() {
    array = [1, 2, 3];
    object = {
      0: 1,
      1: 2,
      2: 3,
      length: 3,
    };
    string = '123';
  });

  it('is a function', function() {
    expect(typeof shuffle).toBe('function');
  });

  it('should throw when target is null or undefined', function() {
    expect(function() {
      shuffle();
    }).toThrow();

    expect(function() {
      shuffle(void 0);
    }).toThrow();

    expect(function() {
      shuffle(null);
    }).toThrow();
  });

  it('should return a new array', function() {
    expect(shuffle(array)).not.toBe(array);
  });

  it('should contain the same elements after a collection is shuffled', function() {
    expect(shuffle(array).sort()).toStrictEqual(array);
    expect(shuffle(object).sort()).toStrictEqual(array);
    expect(
      shuffle(string)
        .map(function(item) {
          return Number(item);
        })
        .sort(),
    ).toStrictEqual(array);
  });

  it('should shuffle small collections', function() {
    const actual = new Array(1000)
      .fill()
      .map(function() {
        return JSON.stringify(shuffle([1, 2]));
      })
      .reduce(function(acc, value) {
        if (acc.includes(value) === false) {
          acc.push(value);
        }

        return acc;
      }, [])
      .sort();

    const expected = ['[1,2]', '[2,1]'];

    expect(actual).toStrictEqual(expected);
  });

  it('should treat number values for `collection` as empty', function() {
    expect(shuffle(1)).toStrictEqual([]);
  });
});

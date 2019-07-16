import shuffle from '../src/shuffle-x';

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
    expect.assertions(1);
    expect(typeof shuffle).toBe('function');
  });

  it('should throw when target is null or undefined', function() {
    expect.assertions(3);
    expect(function() {
      shuffle();
    }).toThrowErrorMatchingSnapshot();

    expect(function() {
      shuffle(void 0);
    }).toThrowErrorMatchingSnapshot();

    expect(function() {
      shuffle(null);
    }).toThrowErrorMatchingSnapshot();
  });

  it('should return a new array', function() {
    expect.assertions(1);
    expect(shuffle(array)).not.toBe(array);
  });

  it('should contain the same elements after a collection is shuffled', function() {
    expect.assertions(3);
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
    expect.assertions(1);
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
    expect.assertions(1);
    expect(shuffle(1)).toStrictEqual([]);
  });
});

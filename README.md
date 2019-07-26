<a
  href="https://travis-ci.org/Xotic750/shuffle-x"
  title="Travis status">
<img
  src="https://travis-ci.org/Xotic750/shuffle-x.svg?branch=master"
  alt="Travis status" height="18">
</a>
<a
  href="https://david-dm.org/Xotic750/shuffle-x"
  title="Dependency status">
<img src="https://david-dm.org/Xotic750/shuffle-x/status.svg"
  alt="Dependency status" height="18"/>
</a>
<a
  href="https://david-dm.org/Xotic750/shuffle-x?type=dev"
  title="devDependency status">
<img src="https://david-dm.org/Xotic750/shuffle-x/dev-status.svg"
  alt="devDependency status" height="18"/>
</a>
<a
  href="https://badge.fury.io/js/shuffle-x"
  title="npm version">
<img src="https://badge.fury.io/js/shuffle-x.svg"
  alt="npm version" height="18">
</a>
<a
  href="https://www.jsdelivr.com/package/npm/shuffle-x"
  title="jsDelivr hits">
<img src="https://data.jsdelivr.com/v1/package/npm/shuffle-x/badge?style=rounded"
  alt="jsDelivr hits" height="18">
</a>
<a
  href="https://bettercodehub.com/results/Xotic750/shuffle-x"
  title="bettercodehub score">
<img src="https://bettercodehub.com/edge/badge/Xotic750/shuffle-x?branch=master"
  alt="bettercodehub score" height="18">
</a>

<a name="module_shuffle-x"></a>

## shuffle-x

Creates an array of shuffled values.

<a name="exp_module_shuffle-x--module.exports"></a>

### `module.exports(array)` ⇒ <code>Array</code> ⏏

Creates an array of shuffled values.

**Kind**: Exported function  
**Returns**: <code>Array</code> - Returns the new shuffled array.  
**Throws**:

- <code>TypeError</code> If array is null or undefined.

**See**: [https://en.wikipedia.org/wiki/Fisher-Yates_shuffle](https://en.wikipedia.org/wiki/Fisher-Yates_shuffle)

| Param | Type                                      | Description           |
| ----- | ----------------------------------------- | --------------------- |
| array | <code>Array</code> \| <code>Object</code> | The array to shuffle. |

**Example**

```js
import shuffle from 'shuffle-x';

console.log(shuffle([1, 2, 3, 4])); // e.g. [4, 1, 3, 2]
```

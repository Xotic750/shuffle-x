<a href="https://travis-ci.org/Xotic750/shuffle-x"
   title="Travis status">
<img
   src="https://travis-ci.org/Xotic750/shuffle-x.svg?branch=master"
   alt="Travis status" height="18"/>
</a>
<a href="https://david-dm.org/Xotic750/shuffle-x"
   title="Dependency status">
<img src="https://david-dm.org/Xotic750/shuffle-x.svg"
   alt="Dependency status" height="18"/>
</a>
<a href="https://david-dm.org/Xotic750/shuffle-x#info=devDependencies"
   title="devDependency status">
<img src="https://david-dm.org/Xotic750/shuffle-x/dev-status.svg"
   alt="devDependency status" height="18"/>
</a>
<a href="https://badge.fury.io/js/shuffle-x" title="npm version">
<img src="https://badge.fury.io/js/shuffle-x.svg"
   alt="npm version" height="18"/>
</a>
<a name="module_shuffle-x"></a>

## shuffle-x
Creates an array of shuffled values.

**Version**: 1.3.0  
**Author**: Xotic750 <Xotic750@gmail.com>  
**License**: [MIT](&lt;https://opensource.org/licenses/MIT&gt;)  
**Copyright**: Xotic750  
<a name="exp_module_shuffle-x--module.exports"></a>

### `module.exports` ⇒ <code>Array</code> ⏏
Creates an array of shuffled values.

**Kind**: Exported member  
**Returns**: <code>Array</code> - Returns the new shuffled array.  
**Throws**:

- <code>TypeError</code> If array is null or undefined.

**See**: [https://en.wikipedia.org/wiki/Fisher-Yates_shuffle](https://en.wikipedia.org/wiki/Fisher-Yates_shuffle)  

| Param | Type | Description |
| --- | --- | --- |
| array | <code>Array</code> \| <code>Object</code> | The array to shuffle. |

**Example**  
```js
var shuffle = require('shuffle-x');

shuffle([1, 2, 3, 4]); // => [4, 1, 3, 2]
```

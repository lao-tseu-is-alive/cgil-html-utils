# cgil-html-utils
Goeland client side html utility functions

* [Documentation](https://lao-tseu-is-alive.github.io/cgil-html-utils/docs/)
* [Examples](https://lao-tseu-is-alive.github.io/cgil-html-utils/examples/)
* [Github Project](https://github.com/lao-tseu-is-alive/cgil-html-utils)

## Getting Started

Install `cgil-html-utils` in the shell

```bash
npm i -P cgil-html-utils
```
Then to import all functions  from the library just use this line in your code

```javascript
import * as cgHtmlUtils from 'cgil-html-utils'
```

and use any function as usual.

```javascript
cgHtmlUtils.getEl('mySpanid').innerHTML = "It work's ! "
```

If you work with a bundler like webpack, you can also import only what you neeed.

```javascript
import { isNullOrUndefined, debounce} from 'cgil-html-utils/src/cgHtmlUtils'
```
this way webpack or parcel  will be able to do tree-shaking getting only the functions you are using, 
and your final bundle will be much smaller !

https://webpack.js.org/guides/tree-shaking/

## Documentation
[documentation is available in docs subdirectory](https://lao-tseu-is-alive.github.io/cgil-html-utils/docs/)
generated from jsdoc source code with the excellent [TypeDoc](http://typedoc.org/) ! 

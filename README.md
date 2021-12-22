# cgil-html-utils
goeland client side html utility functions

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

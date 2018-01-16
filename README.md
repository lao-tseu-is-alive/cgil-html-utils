# cgil-html-utils
goeland client side html utility functions

## Getting Started

Install `cgil-html-utils` in the shell

```bash
npm install cgil-html-utils --save
```
Then to import all functions  from the library just use this line in your code

```javascript
import * as cgHtmlUtils from 'cgil-html-utils'
```

and use any function as usual, webpack will usually do the work

```javascript
cgHtmlUtils.getEl('mySpanid').innerHTML = "It work's ! "
```

If you work with webpack 2, you can also import the ES2016 javascript source

```javascript
import {isNullOrUndefined, debounce} from 'cgil-html-utils/src/cgHtmlUtils'
```
this way webpack will be able to do tree-shaking getting only the functions you are using, 
and your final bundle will be much smaller !

https://webpack.js.org/guides/tree-shaking/

 https://medium.freecodecamp.org/tree-shaking-es6-modules-in-webpack-2-1add6672f31b

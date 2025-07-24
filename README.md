# cg-html-utils
A lightweight TypeScript utility library for HTML and DOM manipulation.

* [Documentation](https://lao-tseu-is-alive.github.io/cg-html-utils/docs/)
* [Examples](https://lao-tseu-is-alive.github.io/cg-html-utils/examples/)

## Getting Started

Install `cg-html-utils` via npm:

```bash
npm install cg-html-utils
```

### Importing the Library

To import all functions from the library, use:

```javascript
import * as cgHtmlUtils from 'cg-html-utils';
```

Then use any function as needed:

```javascript
cgHtmlUtils.getEl('mySpanId').innerHTML = "It works!";
```

For modern bundlers like Vite, Webpack, or Parcel, you can import specific functions to enable tree-shaking, reducing bundle size:

```javascript
import { isNullOrUndefined, debounce } from 'cg-html-utils';
```

Learn more about tree-shaking: [Webpack Tree Shaking Guide](https://webpack.js.org/guides/tree-shaking/)

### Browser Usage (UMD)

If you're using the library directly in a browser, include the UMD bundle:

```html
<script src="path/to/cg-html-utils/dist/cgHtmlUtils.umd.js"></script>
<script>
  CgHtmlUtils.getEl('mySpanId').innerHTML = "It works!";
</script>
```

## Documentation

Comprehensive documentation is generated from JSDoc comments using [TypeDoc](https://typedoc.org/) and is available in the [docs subdirectory](https://lao-tseu-is-alive.github.io/cg-html-utils/docs/).

## Features

- Lightweight utilities for DOM manipulation, event handling, and string processing.
- TypeScript support with type definitions.
- Compatible with modern browsers and Node.js environments.
- Supports ES modules and UMD formats for flexible usage.
- Tree-shaking support for optimized bundle sizes.

## Development

To build the library and generate documentation:

```bash
npm run build  # Builds UMD, ES modules, and TypeScript declarations
npm run docs   # Generates documentation in the docs folder
```

## License

MIT

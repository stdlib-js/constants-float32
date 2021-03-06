<!--

@license Apache-2.0

Copyright (c) 2021 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Constants

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Single-precision floating-point mathematical constants.

<section class="installation">

## Installation

```bash
npm install @stdlib/constants-float32
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm` branch][esm-url].
-   If you are using Deno, visit the [`deno` branch][deno-url].
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd` branch][umd-url].

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

</section>

<section class="usage">

## Usage

```javascript
var constants = require( '@stdlib/constants-float32' );
```

#### constants

Single-precision floating-point mathematical constants.

```javascript
var c = constants;
// returns {...}
```

<!-- <toc pattern="*" > -->

<div class="namespace-toc">

-   <span class="signature">[`CBRT_EPS`][@stdlib/constants/float32/cbrt-eps]</span><span class="delimiter">: </span><span class="description">cube root of single-precision floating-point epsilon.</span>
-   <span class="signature">[`EPS`][@stdlib/constants/float32/eps]</span><span class="delimiter">: </span><span class="description">difference between one and the smallest value greater than one that can be represented as a single-precision floating-point number.</span>
-   <span class="signature">[`EXPONENT_BIAS`][@stdlib/constants/float32/exponent-bias]</span><span class="delimiter">: </span><span class="description">the bias of a single-precision floating-point number's exponent.</span>
-   <span class="signature">[`MAX_SAFE_INTEGER`][@stdlib/constants/float32/max-safe-integer]</span><span class="delimiter">: </span><span class="description">maximum safe single-precision floating-point integer.</span>
-   <span class="signature">[`MAX`][@stdlib/constants/float32/max]</span><span class="delimiter">: </span><span class="description">maximum single-precision floating-point number.</span>
-   <span class="signature">[`MIN_SAFE_INTEGER`][@stdlib/constants/float32/min-safe-integer]</span><span class="delimiter">: </span><span class="description">minimum safe single-precision floating-point integer.</span>
-   <span class="signature">[`NINF`][@stdlib/constants/float32/ninf]</span><span class="delimiter">: </span><span class="description">single-precision floating-point negative infinity.</span>
-   <span class="signature">[`NUM_BYTES`][@stdlib/constants/float32/num-bytes]</span><span class="delimiter">: </span><span class="description">size (in bytes) of a single-precision floating-point number.</span>
-   <span class="signature">[`PINF`][@stdlib/constants/float32/pinf]</span><span class="delimiter">: </span><span class="description">single-precision floating-point positive infinity.</span>
-   <span class="signature">[`PRECISION`][@stdlib/constants/float32/precision]</span><span class="delimiter">: </span><span class="description">effective number of bits in the significand of a single-precision floating-point number.</span>
-   <span class="signature">[`SMALLEST_NORMAL`][@stdlib/constants/float32/smallest-normal]</span><span class="delimiter">: </span><span class="description">smallest positive **normalized** single-precision floating-point number.</span>
-   <span class="signature">[`SMALLEST_SUBNORMAL`][@stdlib/constants/float32/smallest-subnormal]</span><span class="delimiter">: </span><span class="description">smallest positive **denormalized** single-precision floating-point number.</span>
-   <span class="signature">[`SQRT_EPS`][@stdlib/constants/float32/sqrt-eps]</span><span class="delimiter">: </span><span class="description">square root of single-precision floating-point epsilon.</span>

</div>

<!-- </toc> -->

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- TODO: better examples -->

<!-- eslint no-undef: "error" -->

```javascript
var objectKeys = require( '@stdlib/utils-keys' );
var constants = require( '@stdlib/constants-float32' );

console.log( objectKeys( constants ) );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/constants-float32.svg
[npm-url]: https://npmjs.org/package/@stdlib/constants-float32

[test-image]: https://github.com/stdlib-js/constants-float32/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/constants-float32/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/constants-float32/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/constants-float32?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/constants-float32.svg
[dependencies-url]: https://david-dm.org/stdlib-js/constants-float32/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/constants-float32/tree/deno
[umd-url]: https://github.com/stdlib-js/constants-float32/tree/umd
[esm-url]: https://github.com/stdlib-js/constants-float32/tree/esm
[branches-url]: https://github.com/stdlib-js/constants-float32/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/constants-float32/main/LICENSE

<!-- <toc-links> -->

[@stdlib/constants/float32/cbrt-eps]: https://github.com/stdlib-js/constants-float32-cbrt-eps

[@stdlib/constants/float32/eps]: https://github.com/stdlib-js/constants-float32-eps

[@stdlib/constants/float32/exponent-bias]: https://github.com/stdlib-js/constants-float32-exponent-bias

[@stdlib/constants/float32/max-safe-integer]: https://github.com/stdlib-js/constants-float32-max-safe-integer

[@stdlib/constants/float32/max]: https://github.com/stdlib-js/constants-float32-max

[@stdlib/constants/float32/min-safe-integer]: https://github.com/stdlib-js/constants-float32-min-safe-integer

[@stdlib/constants/float32/ninf]: https://github.com/stdlib-js/constants-float32-ninf

[@stdlib/constants/float32/num-bytes]: https://github.com/stdlib-js/constants-float32-num-bytes

[@stdlib/constants/float32/pinf]: https://github.com/stdlib-js/constants-float32-pinf

[@stdlib/constants/float32/precision]: https://github.com/stdlib-js/constants-float32-precision

[@stdlib/constants/float32/smallest-normal]: https://github.com/stdlib-js/constants-float32-smallest-normal

[@stdlib/constants/float32/smallest-subnormal]: https://github.com/stdlib-js/constants-float32-smallest-subnormal

[@stdlib/constants/float32/sqrt-eps]: https://github.com/stdlib-js/constants-float32-sqrt-eps

<!-- </toc-links> -->

</section>

<!-- /.links -->

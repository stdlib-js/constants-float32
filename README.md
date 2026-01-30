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


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Constants

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Single-precision floating-point mathematical constants.



<section class="usage">

## Usage

```javascript
import constants from 'https://cdn.jsdelivr.net/gh/stdlib-js/constants-float32@deno/mod.js';
```
The previous example will load the latest bundled code from the deno branch. Alternatively, you may load a specific version by loading the file from one of the [tagged bundles](https://github.com/stdlib-js/constants-float32/tags). For example,

```javascript
import constants from 'https://cdn.jsdelivr.net/gh/stdlib-js/constants-float32@v0.4.0-deno/mod.js';
```

You can also import the following named exports from the package:

```javascript
import { ABS_MASK, APERY, CATALAN, CBRT_EPS, E, EPS, EULERGAMMA, EXPONENT_BIAS, EXPONENT_MASK, FOURTH_PI, FOURTH_ROOT_EPS, GAMMA_LANCZOS_G, HALF_LN_TWO, HALF_PI, LN_HALF, LN_PI, LN_SQRT_TWO_PI, LN_TEN, LN_TWO, LN_TWO_PI, LOG10E, LOG2E, MAX, MAX_BASE10_EXPONENT, MAX_BASE10_EXPONENT_SUBNORMAL, MAX_BASE2_EXPONENT, MAX_BASE2_EXPONENT_SUBNORMAL, MAX_LN, MAX_NTH_DOUBLE_FACTORIAL, MAX_NTH_FACTORIAL, MAX_SAFE_FIBONACCI, MAX_SAFE_INTEGER, MAX_SAFE_LUCAS, MAX_SAFE_NTH_DOUBLE_FACTORIAL, MAX_SAFE_NTH_FACTORIAL, MAX_SAFE_NTH_FIBONACCI, MAX_SAFE_NTH_LUCAS, MAX_SAFE_NTH_TRIBONACCI, MIN_BASE10_EXPONENT, MIN_BASE10_EXPONENT_SUBNORMAL, MIN_BASE2_EXPONENT, MIN_BASE2_EXPONENT_SUBNORMAL, MIN_LN, MIN_SAFE_INTEGER, NAN, NINF, NUM_BYTES, NUM_SIGNIFICAND_BITS, PHI, PI, PINF, PI_SQUARED, PRECISION, SIGNIFICAND_MASK, SIGN_MASK, SMALLEST_NORMAL, SMALLEST_SUBNORMAL, SQRT_EPS, SQRT_HALF, SQRT_HALF_PI, SQRT_PHI, SQRT_PI, SQRT_THREE, SQRT_TWO, SQRT_TWO_PI, TWO_PI } from 'https://cdn.jsdelivr.net/gh/stdlib-js/constants-float32@deno/mod.js';
```

#### constants

Single-precision floating-point mathematical constants.

```javascript
var c = constants;
// returns {...}
```

<!-- <toc pattern="*" > -->

<div class="namespace-toc">

-   <span class="signature">[`ABS_MASK`][@stdlib/constants/float32/abs-mask]</span><span class="delimiter">: </span><span class="description">mask for excluding the sign bit of a single-precision floating-point number.</span>
-   <span class="signature">[`APERY`][@stdlib/constants/float32/apery]</span><span class="delimiter">: </span><span class="description">Apéry's constant.</span>
-   <span class="signature">[`CATALAN`][@stdlib/constants/float32/catalan]</span><span class="delimiter">: </span><span class="description">Catalan's constant.</span>
-   <span class="signature">[`CBRT_EPS`][@stdlib/constants/float32/cbrt-eps]</span><span class="delimiter">: </span><span class="description">cube root of single-precision floating-point epsilon.</span>
-   <span class="signature">[`E`][@stdlib/constants/float32/e]</span><span class="delimiter">: </span><span class="description">the mathematical constant _e_.</span>
-   <span class="signature">[`EPS`][@stdlib/constants/float32/eps]</span><span class="delimiter">: </span><span class="description">difference between one and the smallest value greater than one that can be represented as a single-precision floating-point number.</span>
-   <span class="signature">[`EULERGAMMA`][@stdlib/constants/float32/eulergamma]</span><span class="delimiter">: </span><span class="description">the Euler-Mascheroni constant.</span>
-   <span class="signature">[`EXPONENT_BIAS`][@stdlib/constants/float32/exponent-bias]</span><span class="delimiter">: </span><span class="description">the bias of a single-precision floating-point number's exponent.</span>
-   <span class="signature">[`EXPONENT_MASK`][@stdlib/constants/float32/exponent-mask]</span><span class="delimiter">: </span><span class="description">mask for the exponent of a single-precision floating-point number.</span>
-   <span class="signature">[`FOURTH_PI`][@stdlib/constants/float32/fourth-pi]</span><span class="delimiter">: </span><span class="description">one fourth times the mathematical constant π.</span>
-   <span class="signature">[`FOURTH_ROOT_EPS`][@stdlib/constants/float32/fourth-root-eps]</span><span class="delimiter">: </span><span class="description">fourth root of single-precision floating-point epsilon.</span>
-   <span class="signature">[`GAMMA_LANCZOS_G`][@stdlib/constants/float32/gamma-lanczos-g]</span><span class="delimiter">: </span><span class="description">arbitrary constant `g` to be used in Lanczos approximation functions.</span>
-   <span class="signature">[`HALF_LN_TWO`][@stdlib/constants/float32/half-ln-two]</span><span class="delimiter">: </span><span class="description">one half times the natural logarithm of `2` as a single-precision floating-point number.</span>
-   <span class="signature">[`HALF_PI`][@stdlib/constants/float32/half-pi]</span><span class="delimiter">: </span><span class="description">one half times the mathematical constant π.</span>
-   <span class="signature">[`LN_HALF`][@stdlib/constants/float32/ln-half]</span><span class="delimiter">: </span><span class="description">natural logarithm of `1/2` as a single-precision floating-point number.</span>
-   <span class="signature">[`LN_PI`][@stdlib/constants/float32/ln-pi]</span><span class="delimiter">: </span><span class="description">natural logarithm of the mathematical constant π as a single-precision floating-point number.</span>
-   <span class="signature">[`LN_SQRT_TWO_PI`][@stdlib/constants/float32/ln-sqrt-two-pi]</span><span class="delimiter">: </span><span class="description">natural logarithm of the square root of 2π.</span>
-   <span class="signature">[`LN_TEN`][@stdlib/constants/float32/ln-ten]</span><span class="delimiter">: </span><span class="description">natural logarithm of `10` as a single-precision floating-point number.</span>
-   <span class="signature">[`LN_TWO_PI`][@stdlib/constants/float32/ln-two-pi]</span><span class="delimiter">: </span><span class="description">natural logarithm of `2π`.</span>
-   <span class="signature">[`LN_TWO`][@stdlib/constants/float32/ln-two]</span><span class="delimiter">: </span><span class="description">natural logarithm of `2` as a single-precision floating-point number.</span>
-   <span class="signature">[`LOG10E`][@stdlib/constants/float32/log10-e]</span><span class="delimiter">: </span><span class="description">base 10 logarithm of the mathematical constant _e_.</span>
-   <span class="signature">[`LOG2E`][@stdlib/constants/float32/log2-e]</span><span class="delimiter">: </span><span class="description">base 2 logarithm of the mathematical constant _e_.</span>
-   <span class="signature">[`MAX_BASE10_EXPONENT_SUBNORMAL`][@stdlib/constants/float32/max-base10-exponent-subnormal]</span><span class="delimiter">: </span><span class="description">the maximum base 10 exponent for a subnormal single-precision floating-point number.</span>
-   <span class="signature">[`MAX_BASE10_EXPONENT`][@stdlib/constants/float32/max-base10-exponent]</span><span class="delimiter">: </span><span class="description">the maximum base 10 exponent for a single-precision floating-point number.</span>
-   <span class="signature">[`MAX_BASE2_EXPONENT_SUBNORMAL`][@stdlib/constants/float32/max-base2-exponent-subnormal]</span><span class="delimiter">: </span><span class="description">the maximum biased base 2 exponent for a subnormal single-precision floating-point number.</span>
-   <span class="signature">[`MAX_BASE2_EXPONENT`][@stdlib/constants/float32/max-base2-exponent]</span><span class="delimiter">: </span><span class="description">the maximum biased base 2 exponent for a single-precision floating-point number.</span>
-   <span class="signature">[`MAX_LN`][@stdlib/constants/float32/max-ln]</span><span class="delimiter">: </span><span class="description">natural logarithm of the maximum single-precision floating-point number.</span>
-   <span class="signature">[`MAX_NTH_DOUBLE_FACTORIAL`][@stdlib/constants/float32/max-nth-double-factorial]</span><span class="delimiter">: </span><span class="description">maximum nth double factorial when stored in single-precision floating-point format.</span>
-   <span class="signature">[`MAX_NTH_FACTORIAL`][@stdlib/constants/float32/max-nth-factorial]</span><span class="delimiter">: </span><span class="description">maximum nth factorial when stored in single-precision floating-point format.</span>
-   <span class="signature">[`MAX_SAFE_FIBONACCI`][@stdlib/constants/float32/max-safe-fibonacci]</span><span class="delimiter">: </span><span class="description">maximum safe Fibonacci number when stored in single-precision floating-point format.</span>
-   <span class="signature">[`MAX_SAFE_INTEGER`][@stdlib/constants/float32/max-safe-integer]</span><span class="delimiter">: </span><span class="description">maximum safe single-precision floating-point integer.</span>
-   <span class="signature">[`MAX_SAFE_LUCAS`][@stdlib/constants/float32/max-safe-lucas]</span><span class="delimiter">: </span><span class="description">maximum safe Lucas number when stored in single-precision floating-point format.</span>
-   <span class="signature">[`MAX_SAFE_NTH_DOUBLE_FACTORIAL`][@stdlib/constants/float32/max-safe-nth-double-factorial]</span><span class="delimiter">: </span><span class="description">maximum safe nth double factorial when stored in single-precision floating-point format.</span>
-   <span class="signature">[`MAX_SAFE_NTH_FACTORIAL`][@stdlib/constants/float32/max-safe-nth-factorial]</span><span class="delimiter">: </span><span class="description">maximum safe nth factorial when stored in single-precision floating-point format.</span>
-   <span class="signature">[`MAX_SAFE_NTH_FIBONACCI`][@stdlib/constants/float32/max-safe-nth-fibonacci]</span><span class="delimiter">: </span><span class="description">maximum safe nth Fibonacci number when stored in single-precision floating-point format.</span>
-   <span class="signature">[`MAX_SAFE_NTH_LUCAS`][@stdlib/constants/float32/max-safe-nth-lucas]</span><span class="delimiter">: </span><span class="description">maximum safe nth Lucas number when stored in single-precision floating-point format.</span>
-   <span class="signature">[`MAX_SAFE_NTH_TRIBONACCI`][@stdlib/constants/float32/max-safe-nth-tribonacci]</span><span class="delimiter">: </span><span class="description">maximum safe nth Tribonacci number when stored in single-precision floating-point format.</span>
-   <span class="signature">[`MAX`][@stdlib/constants/float32/max]</span><span class="delimiter">: </span><span class="description">maximum single-precision floating-point number.</span>
-   <span class="signature">[`MIN_BASE10_EXPONENT_SUBNORMAL`][@stdlib/constants/float32/min-base10-exponent-subnormal]</span><span class="delimiter">: </span><span class="description">the minimum base 10 exponent for a subnormal single-precision floating-point number.</span>
-   <span class="signature">[`MIN_BASE10_EXPONENT`][@stdlib/constants/float32/min-base10-exponent]</span><span class="delimiter">: </span><span class="description">the minimum base 10 exponent for a normal single-precision floating-point number.</span>
-   <span class="signature">[`MIN_BASE2_EXPONENT_SUBNORMAL`][@stdlib/constants/float32/min-base2-exponent-subnormal]</span><span class="delimiter">: </span><span class="description">the minimum biased base 2 exponent for a subnormal single-precision floating-point number.</span>
-   <span class="signature">[`MIN_BASE2_EXPONENT`][@stdlib/constants/float32/min-base2-exponent]</span><span class="delimiter">: </span><span class="description">the minimum biased base 2 exponent for a normal single-precision floating-point number.</span>
-   <span class="signature">[`MIN_LN`][@stdlib/constants/float32/min-ln]</span><span class="delimiter">: </span><span class="description">natural logarithm of the smallest **normalized** single-precision floating-point number.</span>
-   <span class="signature">[`MIN_SAFE_INTEGER`][@stdlib/constants/float32/min-safe-integer]</span><span class="delimiter">: </span><span class="description">minimum safe single-precision floating-point integer.</span>
-   <span class="signature">[`NAN`][@stdlib/constants/float32/nan]</span><span class="delimiter">: </span><span class="description">single-precision floating-point `NaN`.</span>
-   <span class="signature">[`NINF`][@stdlib/constants/float32/ninf]</span><span class="delimiter">: </span><span class="description">single-precision floating-point negative infinity.</span>
-   <span class="signature">[`NUM_BYTES`][@stdlib/constants/float32/num-bytes]</span><span class="delimiter">: </span><span class="description">size (in bytes) of a single-precision floating-point number.</span>
-   <span class="signature">[`NUM_SIGNIFICAND_BITS`][@stdlib/constants/float32/num-significand-bits]</span><span class="delimiter">: </span><span class="description">number of significand bits for a single-precision floating-point number.</span>
-   <span class="signature">[`PHI`][@stdlib/constants/float32/phi]</span><span class="delimiter">: </span><span class="description">golden ratio.</span>
-   <span class="signature">[`PI_SQUARED`][@stdlib/constants/float32/pi-squared]</span><span class="delimiter">: </span><span class="description">π².</span>
-   <span class="signature">[`PI`][@stdlib/constants/float32/pi]</span><span class="delimiter">: </span><span class="description">the mathematical constant π.</span>
-   <span class="signature">[`PINF`][@stdlib/constants/float32/pinf]</span><span class="delimiter">: </span><span class="description">single-precision floating-point positive infinity.</span>
-   <span class="signature">[`PRECISION`][@stdlib/constants/float32/precision]</span><span class="delimiter">: </span><span class="description">effective number of bits in the significand of a single-precision floating-point number.</span>
-   <span class="signature">[`SIGN_MASK`][@stdlib/constants/float32/sign-mask]</span><span class="delimiter">: </span><span class="description">mask for the sign bit of a single-precision floating-point number.</span>
-   <span class="signature">[`SIGNIFICAND_MASK`][@stdlib/constants/float32/significand-mask]</span><span class="delimiter">: </span><span class="description">mask for the significand of a single-precision floating-point number.</span>
-   <span class="signature">[`SMALLEST_NORMAL`][@stdlib/constants/float32/smallest-normal]</span><span class="delimiter">: </span><span class="description">smallest positive **normalized** single-precision floating-point number.</span>
-   <span class="signature">[`SMALLEST_SUBNORMAL`][@stdlib/constants/float32/smallest-subnormal]</span><span class="delimiter">: </span><span class="description">smallest positive **denormalized** single-precision floating-point number.</span>
-   <span class="signature">[`SQRT_EPS`][@stdlib/constants/float32/sqrt-eps]</span><span class="delimiter">: </span><span class="description">square root of single-precision floating-point epsilon.</span>
-   <span class="signature">[`SQRT_HALF_PI`][@stdlib/constants/float32/sqrt-half-pi]</span><span class="delimiter">: </span><span class="description">square root of the mathematical constant π divided by 2 as a single-precision floating-point number.</span>
-   <span class="signature">[`SQRT_HALF`][@stdlib/constants/float32/sqrt-half]</span><span class="delimiter">: </span><span class="description">square root of `1/2` as a single-precision floating-point number.</span>
-   <span class="signature">[`SQRT_PHI`][@stdlib/constants/float32/sqrt-phi]</span><span class="delimiter">: </span><span class="description">square root of the Golden ratio (φ) as a single-precision floating-point number.</span>
-   <span class="signature">[`SQRT_PI`][@stdlib/constants/float32/sqrt-pi]</span><span class="delimiter">: </span><span class="description">square root of the mathematical constant π as a single-precision floating-point number.</span>
-   <span class="signature">[`SQRT_THREE`][@stdlib/constants/float32/sqrt-three]</span><span class="delimiter">: </span><span class="description">square root of `3` as a single-precision floating-point number.</span>
-   <span class="signature">[`SQRT_TWO_PI`][@stdlib/constants/float32/sqrt-two-pi]</span><span class="delimiter">: </span><span class="description">square root of the mathematical constant π times 2 as a single-precision floating-point number.</span>
-   <span class="signature">[`SQRT_TWO`][@stdlib/constants/float32/sqrt-two]</span><span class="delimiter">: </span><span class="description">square root of `2` as a single-precision floating-point number.</span>
-   <span class="signature">[`TWO_PI`][@stdlib/constants/float32/two-pi]</span><span class="delimiter">: </span><span class="description">the mathematical constant π times 2.</span>

</div>

<!-- </toc> -->

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- TODO: better examples -->

<!-- eslint no-undef: "error" -->

```javascript
import objectKeys from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-keys@deno/mod.js';
import constants from 'https://cdn.jsdelivr.net/gh/stdlib-js/constants-float32@deno/mod.js';

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

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2026. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/constants-float32.svg
[npm-url]: https://npmjs.org/package/@stdlib/constants-float32

[test-image]: https://github.com/stdlib-js/constants-float32/actions/workflows/test.yml/badge.svg?branch=v0.4.0
[test-url]: https://github.com/stdlib-js/constants-float32/actions/workflows/test.yml?query=branch:v0.4.0

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/constants-float32/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/constants-float32?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/constants-float32.svg
[dependencies-url]: https://david-dm.org/stdlib-js/constants-float32/main

-->

[chat-image]: https://img.shields.io/badge/zulip-join_chat-brightgreen.svg
[chat-url]: https://stdlib.zulipchat.com

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/constants-float32/tree/deno
[deno-readme]: https://github.com/stdlib-js/constants-float32/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/constants-float32/tree/umd
[umd-readme]: https://github.com/stdlib-js/constants-float32/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/constants-float32/tree/esm
[esm-readme]: https://github.com/stdlib-js/constants-float32/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/constants-float32/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/constants-float32/main/LICENSE

<!-- <toc-links> -->

[@stdlib/constants/float32/abs-mask]: https://github.com/stdlib-js/constants-float32-abs-mask/tree/deno

[@stdlib/constants/float32/apery]: https://github.com/stdlib-js/constants-float32-apery/tree/deno

[@stdlib/constants/float32/catalan]: https://github.com/stdlib-js/constants-float32-catalan/tree/deno

[@stdlib/constants/float32/cbrt-eps]: https://github.com/stdlib-js/constants-float32-cbrt-eps/tree/deno

[@stdlib/constants/float32/e]: https://github.com/stdlib-js/constants-float32-e/tree/deno

[@stdlib/constants/float32/eps]: https://github.com/stdlib-js/constants-float32-eps/tree/deno

[@stdlib/constants/float32/eulergamma]: https://github.com/stdlib-js/constants-float32-eulergamma/tree/deno

[@stdlib/constants/float32/exponent-bias]: https://github.com/stdlib-js/constants-float32-exponent-bias/tree/deno

[@stdlib/constants/float32/exponent-mask]: https://github.com/stdlib-js/constants-float32-exponent-mask/tree/deno

[@stdlib/constants/float32/fourth-pi]: https://github.com/stdlib-js/constants-float32-fourth-pi/tree/deno

[@stdlib/constants/float32/fourth-root-eps]: https://github.com/stdlib-js/constants-float32-fourth-root-eps/tree/deno

[@stdlib/constants/float32/gamma-lanczos-g]: https://github.com/stdlib-js/constants-float32-gamma-lanczos-g/tree/deno

[@stdlib/constants/float32/half-ln-two]: https://github.com/stdlib-js/constants-float32-half-ln-two/tree/deno

[@stdlib/constants/float32/half-pi]: https://github.com/stdlib-js/constants-float32-half-pi/tree/deno

[@stdlib/constants/float32/ln-half]: https://github.com/stdlib-js/constants-float32-ln-half/tree/deno

[@stdlib/constants/float32/ln-pi]: https://github.com/stdlib-js/constants-float32-ln-pi/tree/deno

[@stdlib/constants/float32/ln-sqrt-two-pi]: https://github.com/stdlib-js/constants-float32-ln-sqrt-two-pi/tree/deno

[@stdlib/constants/float32/ln-ten]: https://github.com/stdlib-js/constants-float32-ln-ten/tree/deno

[@stdlib/constants/float32/ln-two-pi]: https://github.com/stdlib-js/constants-float32-ln-two-pi/tree/deno

[@stdlib/constants/float32/ln-two]: https://github.com/stdlib-js/constants-float32-ln-two/tree/deno

[@stdlib/constants/float32/log10-e]: https://github.com/stdlib-js/constants-float32-log10-e/tree/deno

[@stdlib/constants/float32/log2-e]: https://github.com/stdlib-js/constants-float32-log2-e/tree/deno

[@stdlib/constants/float32/max-base10-exponent-subnormal]: https://github.com/stdlib-js/constants-float32-max-base10-exponent-subnormal/tree/deno

[@stdlib/constants/float32/max-base10-exponent]: https://github.com/stdlib-js/constants-float32-max-base10-exponent/tree/deno

[@stdlib/constants/float32/max-base2-exponent-subnormal]: https://github.com/stdlib-js/constants-float32-max-base2-exponent-subnormal/tree/deno

[@stdlib/constants/float32/max-base2-exponent]: https://github.com/stdlib-js/constants-float32-max-base2-exponent/tree/deno

[@stdlib/constants/float32/max-ln]: https://github.com/stdlib-js/constants-float32-max-ln/tree/deno

[@stdlib/constants/float32/max-nth-double-factorial]: https://github.com/stdlib-js/constants-float32-max-nth-double-factorial/tree/deno

[@stdlib/constants/float32/max-nth-factorial]: https://github.com/stdlib-js/constants-float32-max-nth-factorial/tree/deno

[@stdlib/constants/float32/max-safe-fibonacci]: https://github.com/stdlib-js/constants-float32-max-safe-fibonacci/tree/deno

[@stdlib/constants/float32/max-safe-integer]: https://github.com/stdlib-js/constants-float32-max-safe-integer/tree/deno

[@stdlib/constants/float32/max-safe-lucas]: https://github.com/stdlib-js/constants-float32-max-safe-lucas/tree/deno

[@stdlib/constants/float32/max-safe-nth-double-factorial]: https://github.com/stdlib-js/constants-float32-max-safe-nth-double-factorial/tree/deno

[@stdlib/constants/float32/max-safe-nth-factorial]: https://github.com/stdlib-js/constants-float32-max-safe-nth-factorial/tree/deno

[@stdlib/constants/float32/max-safe-nth-fibonacci]: https://github.com/stdlib-js/constants-float32-max-safe-nth-fibonacci/tree/deno

[@stdlib/constants/float32/max-safe-nth-lucas]: https://github.com/stdlib-js/constants-float32-max-safe-nth-lucas/tree/deno

[@stdlib/constants/float32/max-safe-nth-tribonacci]: https://github.com/stdlib-js/constants-float32-max-safe-nth-tribonacci/tree/deno

[@stdlib/constants/float32/max]: https://github.com/stdlib-js/constants-float32-max/tree/deno

[@stdlib/constants/float32/min-base10-exponent-subnormal]: https://github.com/stdlib-js/constants-float32-min-base10-exponent-subnormal/tree/deno

[@stdlib/constants/float32/min-base10-exponent]: https://github.com/stdlib-js/constants-float32-min-base10-exponent/tree/deno

[@stdlib/constants/float32/min-base2-exponent-subnormal]: https://github.com/stdlib-js/constants-float32-min-base2-exponent-subnormal/tree/deno

[@stdlib/constants/float32/min-base2-exponent]: https://github.com/stdlib-js/constants-float32-min-base2-exponent/tree/deno

[@stdlib/constants/float32/min-ln]: https://github.com/stdlib-js/constants-float32-min-ln/tree/deno

[@stdlib/constants/float32/min-safe-integer]: https://github.com/stdlib-js/constants-float32-min-safe-integer/tree/deno

[@stdlib/constants/float32/nan]: https://github.com/stdlib-js/constants-float32-nan/tree/deno

[@stdlib/constants/float32/ninf]: https://github.com/stdlib-js/constants-float32-ninf/tree/deno

[@stdlib/constants/float32/num-bytes]: https://github.com/stdlib-js/constants-float32-num-bytes/tree/deno

[@stdlib/constants/float32/num-significand-bits]: https://github.com/stdlib-js/constants-float32-num-significand-bits/tree/deno

[@stdlib/constants/float32/phi]: https://github.com/stdlib-js/constants-float32-phi/tree/deno

[@stdlib/constants/float32/pi-squared]: https://github.com/stdlib-js/constants-float32-pi-squared/tree/deno

[@stdlib/constants/float32/pi]: https://github.com/stdlib-js/constants-float32-pi/tree/deno

[@stdlib/constants/float32/pinf]: https://github.com/stdlib-js/constants-float32-pinf/tree/deno

[@stdlib/constants/float32/precision]: https://github.com/stdlib-js/constants-float32-precision/tree/deno

[@stdlib/constants/float32/sign-mask]: https://github.com/stdlib-js/constants-float32-sign-mask/tree/deno

[@stdlib/constants/float32/significand-mask]: https://github.com/stdlib-js/constants-float32-significand-mask/tree/deno

[@stdlib/constants/float32/smallest-normal]: https://github.com/stdlib-js/constants-float32-smallest-normal/tree/deno

[@stdlib/constants/float32/smallest-subnormal]: https://github.com/stdlib-js/constants-float32-smallest-subnormal/tree/deno

[@stdlib/constants/float32/sqrt-eps]: https://github.com/stdlib-js/constants-float32-sqrt-eps/tree/deno

[@stdlib/constants/float32/sqrt-half-pi]: https://github.com/stdlib-js/constants-float32-sqrt-half-pi/tree/deno

[@stdlib/constants/float32/sqrt-half]: https://github.com/stdlib-js/constants-float32-sqrt-half/tree/deno

[@stdlib/constants/float32/sqrt-phi]: https://github.com/stdlib-js/constants-float32-sqrt-phi/tree/deno

[@stdlib/constants/float32/sqrt-pi]: https://github.com/stdlib-js/constants-float32-sqrt-pi/tree/deno

[@stdlib/constants/float32/sqrt-three]: https://github.com/stdlib-js/constants-float32-sqrt-three/tree/deno

[@stdlib/constants/float32/sqrt-two-pi]: https://github.com/stdlib-js/constants-float32-sqrt-two-pi/tree/deno

[@stdlib/constants/float32/sqrt-two]: https://github.com/stdlib-js/constants-float32-sqrt-two/tree/deno

[@stdlib/constants/float32/two-pi]: https://github.com/stdlib-js/constants-float32-two-pi/tree/deno

<!-- </toc-links> -->

</section>

<!-- /.links -->

/*
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

// TypeScript Version: 4.1

/* eslint-disable max-lines */

import ABS_MASK = require( '@stdlib/constants-float32-abs-mask' );
import CBRT_EPS = require( '@stdlib/constants-float32-cbrt-eps' );
import EPS = require( '@stdlib/constants-float32-eps' );
import EXPONENT_BIAS = require( '@stdlib/constants-float32-exponent-bias' );
import EXPONENT_MASK = require( '@stdlib/constants-float32-exponent-mask' );
import MAX = require( '@stdlib/constants-float32-max' );
import MAX_SAFE_INTEGER = require( '@stdlib/constants-float32-max-safe-integer' );
import MIN_SAFE_INTEGER = require( '@stdlib/constants-float32-min-safe-integer' );
import NAN = require( '@stdlib/constants-float32-nan' );
import NINF = require( '@stdlib/constants-float32-ninf' );
import NUM_BYTES = require( '@stdlib/constants-float32-num-bytes' );
import PINF = require( '@stdlib/constants-float32-pinf' );
import PRECISION = require( '@stdlib/constants-float32-precision' );
import SIGN_MASK = require( '@stdlib/constants-float32-sign-mask' );
import SIGNIFICAND_MASK = require( '@stdlib/constants-float32-significand-mask' );
import SMALLEST_NORMAL = require( '@stdlib/constants-float32-smallest-normal' );
import SMALLEST_SUBNORMAL = require( '@stdlib/constants-float32-smallest-subnormal' );
import SQRT_EPS = require( '@stdlib/constants-float32-sqrt-eps' );

/**
* Interface describing the `float32` namespace.
*/
interface Namespace {
	/**
	* Mask for excluding the sign bit of a single-precision floating-point number.
	*
	* @example
	* var mask = ns.ABS_MASK;
	* // returns 2147483647
	*/
	ABS_MASK: typeof ABS_MASK;

	/**
	* Cube root of single-precision floating-point epsilon.
	*
	* @example
	* var eps = ns.CBRT_EPS;
	* // returns 0.004921566694974899
	*/
	CBRT_EPS: typeof CBRT_EPS;

	/**
	* Difference between one and the smallest value greater than one that can be represented as a single-precision floating-point number.
	*
	* @example
	* var eps = ns.EPS;
	* // returns 1.1920928955078125e-7
	*/
	EPS: typeof EPS;

	/**
	* The bias of a single-precision floating-point number's exponent.
	*
	* @example
	* var bias = ns.EXPONENT_BIAS;
	* // returns 127
	*/
	EXPONENT_BIAS: typeof EXPONENT_BIAS;

	/**
	* Mask for the exponent of a single-precision floating-point number.
	*
	* @example
	* var mask = ns.EXPONENT_MASK;
	* // returns 2139095040
	*/
	EXPONENT_MASK: typeof EXPONENT_MASK;

	/**
	* Maximum single-precision floating-point number.
	*
	* @example
	* var max = ns.MAX;
	* // returns 3.4028234663852886e+38
	*/
	MAX: typeof MAX;

	/**
	* Maximum safe single-precision floating-point integer.
	*
	* @example
	* var max = ns.MAX_SAFE_INTEGER;
	* // returns 16777215
	*/
	MAX_SAFE_INTEGER: typeof MAX_SAFE_INTEGER;

	/**
	* Minimum safe single-precision floating-point integer.
	*
	* @example
	* var min = ns.MIN_SAFE_INTEGER;
	* // returns -16777215
	*/
	MIN_SAFE_INTEGER: typeof MIN_SAFE_INTEGER;

	/**
	* Single-precision floating-point NaN.
	*
	* @example
	* var nan = ns.NAN;
	* // returns NaN
	*/
	NAN: typeof NAN;

	/**
	* Single-precision floating-point negative infinity.
	*
	* @example
	* var ninf = ns.NINF;
	* // returns -infinity
	*/
	NINF: typeof NINF;

	/**
	* Size (in bytes) of a single-precision floating-point number.
	*
	* @example
	* var bytes = ns.NUM_BYTES
	* // returns 4
	*/
	NUM_BYTES: typeof NUM_BYTES;

	/**
	* Single-precision floating-point positive infinity.
	*
	* @example
	* var pinf = ns.PINF;
	* // returns +infinity
	*/
	PINF: typeof PINF;

	/**
	* Effective number of bits in the significand of a single-precision floating-point number.
	*
	* @example
	* var precision = ns.PRECISION;
	* // returns 24
	*/
	PRECISION: typeof PRECISION;

	/**
	* Mask for the sign bit of a single-precision floating-point number.
	*
	* @example
	* var mask = ns.SIGN_MASK;
	* // returns 2147483648
	*/
	SIGN_MASK: typeof SIGN_MASK;

	/**
	* Mask for the significand of a single-precision floating-point number.
	*
	* @example
	* var mask = ns.SIGNIFICAND_MASK;
	* // returns 8388607
	*/
	SIGNIFICAND_MASK: typeof SIGNIFICAND_MASK;

	/**
	* Smallest positive single-precision floating-point normal number.
	*
	* @example
	* var smallest = ns.SMALLEST_NORMAL;
	* // returns 1.1754943508222875e-38
	*/
	SMALLEST_NORMAL: typeof SMALLEST_NORMAL;

	/**
	* Smallest positive single-precision floating-point subnormal number.
	*
	* @example
	* var smallest = ns.SMALLEST_SUBNORMAL;
	* // returns 1.401298464324817e-45
	*/
	SMALLEST_SUBNORMAL: typeof SMALLEST_SUBNORMAL;

	/**
	* Square root of single-precision floating-point epsilon.
	*
	* @example
	* var eps = ns.SQRT_EPS;
	* // returns 0.0003452669770922512
	*/
	SQRT_EPS: typeof SQRT_EPS;
}

/**
* Single-precision floating-point mathematical constants.
*/
declare var ns: Namespace;


// EXPORTS //

export = ns;

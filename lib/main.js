/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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

'use strict';

// MODULES //

var Slice = require( '@stdlib/slice-ctor' );
var trim = require( '@stdlib/string-base-trim' );
var resolveEnd = require( './resolve_end.js' );
var RE_COLON_SEP = require( './re_colon_sep.js' );
var RE_INTEGER = require( './re_integer.js' );
var RE_END = require( './re_end.js' );
var eInvalidSubsequence = require( './error_invalid_subsequence.js' );
var eOutOfBounds = require( './error_out_of_bounds.js' );
var eInvalidIncrement = require( './error_invalid_increment.js' );


// MAIN //

/**
* Converts a subsequence string to a Slice object.
*
* ## Notes
*
* -   A subsequence string has the following format:
*
*     ```text
*     <start>:<stop>:<increment>
*     ```
*
*     where
*
*     -   If an `increment` is not specified, the default increment is `1`. An increment of zero is **not** allowed.
*     -   The `start` index is **inclusive**.
*     -   The `stop` index is **exclusive**.
*     -   Both `start` and `stop` indices are _optional_. If not provided, `start` and `stop` default to index extremes. Which extremes correspond to which index depends on whether the `increment` is positive or negative.
*     -   Both `start` and `stop` can be negative; in which case, the corresponding index is resolved by subtracting the respective value from the provided length `len`.
*     -   Both `start` and `stop` can use the `end` keyword (e.g., `end-2::2`, `end-3:`, etc), which supports basic subtraction and division.
*     -   The `end` keyword resolves to the provided length `len`. Thus, `:-1` is equivalent to `:end-1`, `:-2` is equivalent to `:end-2`, and so on and so forth. The exception is when performing a division operation when the `increment` is less than zero; in which case, `end` is equal to `len-1` in order to preserve user expectations when `end/d` equals a whole number and slicing from right-to-left. The result from a division operation is **rounded down** to the nearest integer value.
*
* -   When `strict` is `false`, the resolved slice start is clamped to the slice index bounds (i.e., `[0, len)`).
*
* -   When `strict` is `false`, the resolved slice end is upper bound clamped to `len` (i.e., one greater than the last possible index).
*
* -   When the increment is negative, the resolved slice end value may be `null`, thus indicating that a non-empty slice should include the first index.
*
* -   The function ensures that results satisfy the convention that `:n` combined with `n:` is equivalent to `:` (i.e., selecting all elements).
*
* -   When `len` is zero, the function always returns a Slice object equivalent to `0:0:<increment>`.
*
* -   The function returns an error object if provided an invalid subsequence string.
*
* -   If `strict` is `true`, the function returns an error object if provided a subsequence string which exceeds index bounds.
*
* @param {string} str - input string
* @param {NonNegativeInteger} len - maximum number of elements allowed in the slice
* @param {boolean} strict - boolean indicating whether to enforce strict bounds checking
* @returns {(Slice|Object)} Slice object or an error object
*
* @example
* var s = seq2slice( '0:10:1', 10, false );
* // returns <Slice>
*
* var v = s.start;
* // returns 0
*
* v = s.stop;
* // returns 10
*
* v = s.step;
* // returns 1
*
* @example
* var s = seq2slice( '::-1', 10, false );
* // returns <Slice>
*
* var v = s.start;
* // returns 9
*
* v = s.stop;
* // returns null
*
* v = s.step;
* // returns -1
*
* @example
* var s = seq2slice( ':0:-1', 10, false );
* // returns <Slice>
*
* var v = s.start;
* // returns 9
*
* v = s.stop;
* // returns 0
*
* v = s.step;
* // returns -1
*
* @example
* var s = seq2slice( '4::-1', 10, false );
* // returns <Slice>
*
* var v = s.start;
* // returns 4
*
* v = s.stop;
* // returns null
*
* v = s.step;
* // returns -1
*
* @example
* var s = seq2slice( '::', 10, false );
* // returns <Slice>
*
* var v = s.start;
* // returns 0
*
* v = s.stop;
* // returns 10
*
* v = s.step;
* // returns 1
*
* @example
* var s = seq2slice( ':end:', 10, false );
* // returns <Slice>
*
* var v = s.start;
* // returns 0
*
* v = s.stop;
* // returns 10
*
* v = s.step;
* // returns 1
*
* @example
* var s = seq2slice( 'end::-1', 10, false );
* // returns <Slice>
*
* var v = s.start;
* // returns 9
*
* v = s.stop;
* // returns null
*
* v = s.step;
* // returns -1
*
* @example
* var s = seq2slice( 'end-2::-1', 10, false );
* // returns <Slice>
*
* var v = s.start;
* // returns 8
*
* v = s.stop;
* // returns null
*
* v = s.step;
* // returns -1
*
* @example
* var s = seq2slice( 'end/2::-1', 10, false );
* // returns <Slice>
*
* var v = s.start;
* // returns 4
*
* v = s.stop;
* // returns null
*
* v = s.step;
* // returns -1
*
* @example
* var s = seq2slice( 'end:end/2:-1', 10, false );
* // returns <Slice>
*
* var v = s.start;
* // returns 9
*
* v = s.stop;
* // returns 4
*
* v = s.step;
* // returns -1
*
* @example
* var s = seq2slice( ':end/2:-1', 10, false );
* // returns <Slice>
*
* var v = s.start;
* // returns 9
*
* v = s.stop;
* // returns 4
*
* v = s.step;
* // returns -1
*
* @example
* var s = seq2slice( ':end/2:1', 10, false );
* // returns <Slice>
*
* var v = s.start;
* // returns 0
*
* v = s.stop;
* // returns 5
*
* v = s.step;
* // returns 1
*
* @example
* var s = seq2slice( ':end/3', 10, false );
* // returns <Slice>
*
* var v = s.start;
* // returns 0
*
* v = s.stop;
* // returns 3
*
* v = s.step;
* // returns 1
*
* @example
* var s = seq2slice( 'end/3::-1', 10, false );
* // returns <Slice>
*
* var v = s.start;
* // returns 3
*
* v = s.stop;
* // returns null
*
* v = s.step;
* // returns -1
*
* @example
* var s = seq2slice( 'end/3::', 10, false );
* // returns <Slice>
*
* var v = s.start;
* // returns 3
*
* v = s.stop;
* // returns 10
*
* v = s.step;
* // returns 1
*
* @example
* var s = seq2slice( 'end/3::', 9, false );
* // returns <Slice>
*
* var v = s.start;
* // returns 3
*
* v = s.stop;
* // returns 9
*
* v = s.step;
* // returns 1
*
* @example
* var s = seq2slice( 'end/3::-1', 9, false );
* // returns <Slice>
*
* var v = s.start;
* // returns 2
*
* v = s.stop;
* // returns null
*
* v = s.step;
* // returns -1
*
* @example
* var s = seq2slice( '5:5', 10, false );
* // returns <Slice>
*
* var v = s.start;
* // returns 5
*
* v = s.stop;
* // returns 5
*
* v = s.step;
* // returns 1
*
* @example
* var s = seq2slice( '5:5', 0, false );
* // returns <Slice>
*
* var v = s.start;
* // returns 0
*
* v = s.stop;
* // returns 0
*
* v = s.step;
* // returns 1
*
* @example
* var s = seq2slice( 'end:', 10, false );
* // returns <Slice>
*
* var v = s.start;
* // returns 10
*
* v = s.stop;
* // returns 10
*
* v = s.step;
* // returns 1
*/
function seq2slice( str, len, strict ) {
	var parts;
	var N;
	var v;

	parts = trim( str ).split( RE_COLON_SEP );
	N = parts.length;

	// Disallow providing standalone components (e.g., '1', 'end', etc) and strings having too many components (e.g., '1:2:3:4')...
	if ( N < 2 || N > 3 ) {
		return eInvalidSubsequence();
	}

	/* Increment */

	// Process the increment...
	if ( N === 3 ) {
		v = parts[ 2 ];
		if ( v.length === 0 ) { // empty increment
			parts[ 2 ] = 1; // default increment
		} else {
			if ( RE_INTEGER.test( v ) === false ) {
				return eInvalidSubsequence();
			}
			v = parseInt( v, 10 );
			if ( v === 0 ) {
				return eInvalidIncrement(); // increment cannot be zero
			}
			parts[ 2 ] = v;
		}
	} else {
		parts.push( 1 ); // default increment
	}

	/* Starting Index */

	// Process the starting index...
	v = parts[ 0 ];

	// Case: empty starting index
	if ( v.length === 0 ) {
		// If the increment is negative, we need to iterate from the last index...
		if ( parts[ 2 ] < 0 && len > 0 ) {
			parts[ 0 ] = len - 1;
		} else {
			parts[ 0 ] = 0; // default starting index (inclusive)
		}
	}
	// Case: use of the "end" keyword
	else if ( RE_END.test( v ) ) {
		v = resolveEnd( v, len, parts[ 2 ] < 0, strict );
		if ( v < 0 ) {
			if ( v === -2 ) {
				return eOutOfBounds();
			}
			return eInvalidSubsequence();
		}
		if ( parts[ 2 ] < 0 && v >= len ) {
			v -= 1; // clamp to the last index
		}
		parts[ 0 ] = v;
	}
	// Case: integer character sequence
	else if ( RE_INTEGER.test( v ) ) {
		v = parseInt( v, 10 );

		// Check whether we need to resolve the starting index relative to the last index...
		if ( v < 0 ) {
			v = len + v;

			// If the computed index exceeds the index bounds, clamp to the first index...
			if ( v < 0 ) {
				if ( strict ) {
					return eOutOfBounds();
				}
				v = 0;
			}
		}
		// If the index exceeds the index bounds, clamp to the starting index...
		else if ( v >= len ) {
			if ( strict ) {
				return eOutOfBounds();
			}
			// If the increment is negative, clamp to the last index (inclusive)...
			if ( parts[ 2 ] < 0 ) {
				v = len - 1;
			}
			// If the increment is positive, clamp to the "index" following the last index...
			else {
				v = len;
			}
		}
		parts[ 0 ] = v;
	}
	// Case: invalid/unsupported characters/operations
	else {
		return eInvalidSubsequence();
	}

	/* Ending Index */

	// Processing the ending index...
	v = parts[ 1 ];

	// Case: empty ending index
	if ( v.length === 0 ) {
		// If the increment is negative, we need to iterate toward the first index...
		if ( parts[ 2 ] < 0 ) {
			parts[ 1 ] = null;
		} else {
			parts[ 1 ] = len; // default ending index (exclusive)
		}
	}
	// Case: use of the "end" keyword
	else if ( RE_END.test( v ) ) {
		v = resolveEnd( v, len, parts[ 2 ] < 0, strict );
		if ( v < 0 ) {
			if ( v === -2 ) {
				return eOutOfBounds();
			}
			return eInvalidSubsequence();
		}
		parts[ 1 ] = v;
	}
	// Case: integer character sequence
	else if ( RE_INTEGER.test( v ) ) {
		v = parseInt( v, 10 );

		// Check whether we need to resolve the starting index relative to the last index...
		if ( v < 0 ) {
			v = len + v;

			// Check whether the computed index exceeds the index bounds...
			if ( v < 0 ) {
				// If the increment is positive, clamp the ending index to the first index (exclusive)...
				if ( parts[ 2 ] > 0 ) {
					if ( strict ) {
						return eOutOfBounds();
					}
					v = 0;
				} else {
					// If the increment is negative, the ending index should resolve to the first index (inclusive)...
					if ( strict && v < -1 ) {
						return eOutOfBounds();
					}
					v = null;
				}
			}
		}
		// If the index exceeds the index bounds, clamp to the last "index" (exclusive)...
		else if ( v > len ) {
			if ( strict ) {
				return eOutOfBounds();
			}
			v = len;
		}
		parts[ 1 ] = v;
	}
	// Case: invalid/unsupported characters/operations
	else {
		return eInvalidSubsequence();
	}

	// Handle empty slice (note: this is at the end rather than at the beginning in order to ensure that `start` and `stop` are always validated)...
	if ( len === 0 ) {
		return new Slice( 0, 0, parts[ 2 ] );
	}

	return new Slice( parts[ 0 ], parts[ 1 ], parts[ 2 ] );
}


// EXPORTS //

module.exports = seq2slice;

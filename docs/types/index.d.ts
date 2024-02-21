/*
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
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

/**
* Boolean indicating if the current process is running on Darwin.
*
* @example
* var PLATFORM = require( '@stdlib/os-platform' );
*
* if ( IS_DARWIN ) {
*     console.log( 'Running on Darwin...' );
* } else {
*     console.log( 'Running on %s...', PLATFORM );
* }
*/
declare const IS_DARWIN: boolean;


// EXPORTS //

export = IS_DARWIN;

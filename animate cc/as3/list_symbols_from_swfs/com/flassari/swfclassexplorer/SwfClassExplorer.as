/*
The MIT License

Copyright (c) 2008 Flassari.is

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/

package com.flassari.swfclassexplorer {
	import com.flassari.swfclassexplorer.data.Traits;
	import flash.utils.ByteArray;
	
	/**
	 * Inspects a swf for any classes tagged for export.
	 */
	public class SwfClassExplorer {
		/**
		 * Returns an Array of class names found in the supplied ByteArray.
		 * @param	bytes	The ByteArray of the AS3 swf to look in.
		 * @return	Returns an Array of class names found.
		 */
		public static function getClassNames(swfBytes:ByteArray):Array {
			var ret:Array = new Array();
			for each( var abcTag:Abc in AbcExtractor.getAbcTags(swfBytes)) {
				for each( var trait:Traits in abcTag.instances) {
					ret.push(trait.toString().replace(":", "."));
				}
			}
			return ret;
		}
		
		/**
		 * Returns an Array of Traits instances found in the supplied ByteArray.
		 * @param	bytes	The ByteArray of the AS3 swf to look in.
		 * @return	Returns an Array of traits instances found.
		 */
		public static function getTraits(swfBytes:ByteArray):Array {
			return AbcExtractor.getAbcTags(swfBytes);
		}
	}
	
}
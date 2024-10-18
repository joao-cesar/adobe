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
	import com.flassari.swfclassexplorer.data.RecordHeader;
	import flash.utils.ByteArray;
	import flash.utils.Endian;
	
	public class AbcExtractor {		
		public static function getAbcTags(br:ByteArray):Array {
			br.position = 0;
			// Decompress if neccesary
			if (br.readUnsignedByte() == 67) br = decompress(br);
			br.position = 21; // Skip the header
			
			var taglist:Array = new Array();
			var length:uint = br.length;
			while (br.position < length) {
				// Find all the Abc tags
				var posBefore:uint = br.position;
				var rh:RecordHeader = readRecordHeader(br);
				var offset:uint = br.position - posBefore;
				br.position = posBefore;
				
				if (rh.tagCode == 82) { // Abc Tag
					var bytes:ByteArray = new ByteArray();
					bytes.endian = Endian.LITTLE_ENDIAN;
					br.readBytes(bytes, 0, (rh.tagLength + offset));
					taglist.push(new Abc(bytes, offset));
				} else { // Something else
					br.position += rh.tagLength + offset;
				}
			}
			return taglist;
		}
		
		
		private static function readRecordHeader(br:ByteArray):RecordHeader {
			if ( br.position >= br.length - 2)
				return new RecordHeader(0, 2);
				
			var tagCl:uint = br.readUnsignedShort();
			var tagCode:uint = tagCl >> 6;
			var tagLength:int = tagCl - (tagCode << 6);
			
			if (tagLength == 0x3F) tagLength = br.readUnsignedInt();
			if (tagLength > br.length) throw new Error("Record header length too big.");
			
			return new RecordHeader(tagCode, tagLength);
		}
		
		private static function decompress(br:ByteArray):ByteArray {
			br.position = 4;
			var size:uint = br.readUnsignedInt();
			
			// Read the header
			var uncompressed:ByteArray = new ByteArray();
			uncompressed.endian = Endian.LITTLE_ENDIAN;
			br.position = 0;
			br.readBytes(uncompressed, 0, 8);
			
			// Unzip the body
			var compressed:ByteArray = new ByteArray();
			compressed.endian = Endian.LITTLE_ENDIAN;
			br.readBytes(compressed, 0, br.bytesAvailable);
			compressed.uncompress();
			compressed.readBytes(uncompressed, 8, compressed.length);
			return uncompressed;
		}
		
	}
	
}
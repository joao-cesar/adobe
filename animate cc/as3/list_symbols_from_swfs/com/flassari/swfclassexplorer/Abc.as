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
	import com.flassari.swfclassexplorer.data.*;
	import flash.utils.ByteArray;
	
	public class Abc {
		private var publicNs:AbcNamespace = new AbcNamespace("");
		private var anyNs:AbcNamespace = new AbcNamespace("*");
		
		private var strings:Array;
		private var namespaces:Array;
		private var nssets:Array;
		private var names:Array;
		public var instances:Array;
		
		public function Abc(br:ByteArray, offset:uint) {
			br.position = offset + 4;
			while (br.readUnsignedByte() > 0) {} // Seek past the name
			
			var magic:int = br.readInt();
			
			if (magic != (46 << 16 | 14) && magic != (46 << 16 | 15) && magic != (46 << 16 | 16))
				return; // Not an Abc block
			
			parsePool(br);
			seekPastMethodInfos(br);
			seekPastMetadata(br);
			parseInstanceInfos(br);
		}
		
		private function seekPastMethodInfos(br:ByteArray):void{
			names[0] = new AbcQName("*", publicNs);
			var method_count:int = readU32(br);
			
			for (var i:int = 0; i < method_count; i++) {
				var param_count:int = readU32(br);
				readU32(br);
				for (var j:int = 0; j < param_count; j++) readU32(br);
				readU32(br);
				var flags:uint = br.readUnsignedByte();
				
				if ( (flags & 0x08) > 0) {
					var optional_count:int = readU32(br);
					for (var k:int = param_count - optional_count; k < param_count; k++) {
						readU32(br);
						br.position++;
					}
				}
				if ( (flags & 0x80) > 0) {
					for (k = 0; k < param_count; k++) readU32(br);
				}
			}
		}
		
		private function seekPastMetadata(br:ByteArray):void{
			var count:int = readU32(br);
			for (var i:int = 0; i < count; i++) {
				readU32(br);
				var values_count:int = readU32(br);
				for (var q:int = 0; q < values_count * 2; q++) readU32(br);
			}
		}
		
		private function parseInstanceInfos(br:ByteArray):void{
			var count:int = readU32(br);
			instances = new Array(count);
			
			for ( var i:int = 0; i < count; i++) {
				var t:Traits = new Traits();
				instances[i] = t;
				
				t.name = names[readU32(br)];
				t.baseName = names[readU32(br)];
				t.flags = br.readUnsignedByte();
				
				if ( (t.flags & 0x08) > 0) readU32(br);
				
				var interface_count:int = readU32(br);
				t.interfaces = new Array(interface_count);
				for (var j:int = 0; j < interface_count; j++) {
					t.interfaces[j] = names[readU32(br)];
				}
				readU32(br);
				seekPastTraits(br);
			}
		}
		
		private function seekPastTraits(br:ByteArray):void{
			var namecount:int = readU32(br);
			for (var i:int = 0; i < namecount; i++) {
				readU32(br);
				var tag:uint = br.readUnsignedByte();
				var kind:uint = (tag & 0xf);
				if (kind == 0x00 || kind == 0x06 || kind == 0x04) {
					readU32(br);
					if (kind == 0x00 || kind == 0x06) {
						readU32(br);
						if (readU32(br) > 0) br.readByte();
					} else {
						readU32(br);
					}
				} else if (kind == 0x01 || kind == 0x02 || kind == 0x03) {
					readU32(br);
					readU32(br);
				}
				
				var attr:uint = (tag >> 0x04);
				if (attr == 0x04) {
					var mdCount:int = readU32(br);
					for (var j:int = 0; j < mdCount; ++j) readU32(br);
				}
			}
		}
		
		private function parsePool(br:ByteArray):void{
			var n:int, i:int;
			// Seek past the various datatypes
			n = readU32(br); // ints
			for (i = 1; i < n; i++) readU32(br);
			n = readU32(br); // uints
			for (i = 1; i < n; i++) readU32(br);
			n = readU32(br); // doubles
			for (i = 1; i < n; i++) br.readDouble();
			
			n = readU32(br); // strings
			strings = new Array(n);
			if (n > 0) strings[0] = "";
			for (i = 1; i < n; i++) strings[i] = readUTFBytes(br);
			
			n = readU32(br); // namespaces
			namespaces = new Array(n);
			if (n > 0) namespaces[0] = publicNs;
			for (i = 1; i < n; i++) {
				switch(br.readUnsignedByte()) {
					case 0x08: case 0x16: case 0x17: case 0x18: case 0x19: case 0x1a:
						namespaces[i] = new AbcNamespace(strings[readU32(br)]);
						break;
					case 0x05:
						readU32(br);
						namespaces[i] = new AbcNamespace("private", null);
						break;
				}
			}
			n = readU32(br);
			nssets = new Array(n);
			if (n > 0) nssets[0] = null;
			for (i = 1; i < n; i++) {
				var count:int = readU32(br);
				var nsset:Array = new Array(count);
				nssets[i] = nsset;
				for (var j:int = 0; j < count; j++) nsset[j] = namespaces[readU32(br)];
			}
			
			n = readU32(br);
			names = new Array(n);
			if (n > 0) names[0] = null;
			namespaces[0] = anyNs;
			strings[0] = "*";
			for (i = 1; i < n; i++) {
				switch(br.readUnsignedByte()) {
					case 0x07: case 0x0D: {
						var ri:AbcNamespace = namespaces[readU32(br)];
						var lname:String = strings[readU32(br)];
						names[i] = new AbcQName(lname, ri);
						break;
					}
					case 0x0F: case 0x10:
                        names[i] = new AbcQName(strings[readU32(br)]);
                        break;
                    case 0x11: case 0x12:
                        names[i] = null;
                        break;
					case 0x13: case 0x14:
                        names[i] = new AbcQName("", new AbcNamespace(""));
                        break;
					case 0x09: case 0x0E: {
						var localName:String = strings[readU32(br)];
                        names[i] = new MultiName(nssets[readU32(br)], localName);
						break;
					}
					case 0x1B: case 0x1C:
						names[i] = new MultiName(nssets[readU32(br)], "");
						break;
					case 0x1D: {
						var name:AbcQName = names[readU32(br)];
						var cnt:int = readU32(br);
						var params:Array = new Array(count);
						for (j = 0; j < cnt; j++) {
							var idx:int = readU32(br);
							params[j] = names[idx];
						}
						names[i] = new ParameterizedQName(name, params);
						break;
					}
				}
			}
			
			namespaces[0] = publicNs;
			strings[0] = "*";
		}
		
		private function readUTFBytes(br:ByteArray):String {
			var len:int = readU32(br);
			return br.readUTFBytes(len);
		}
		
		private function readU32(br:ByteArray):int {
			var result:int = br.readUnsignedByte();
			if ((result & 0x00000080) == 0)
                return result;
            result = result & 0x0000007f | br.readUnsignedByte() << 7;
            if ((result & 0x00004000) == 0)
                return result;
            result = result & 0x00003fff | br.readUnsignedByte() << 14;
            if ((result & 0x00200000) == 0)
                return result;
            result = result & 0x001fffff | br.readUnsignedByte() << 21;
            if ((result & 0x10000000) == 0)
                return result;
            return result & 0x0fffffff | br.readUnsignedByte() << 28;
		}
	}
	
}









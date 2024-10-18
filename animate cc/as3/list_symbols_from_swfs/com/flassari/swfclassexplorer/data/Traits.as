package com.flassari.swfclassexplorer.data {
	public class Traits {
		public var name:AbcQName;
		public var baseName:AbcQName;
		public var flags:uint;
		public var interfaces:Array;
		
		public function toString() {
            return name.toString();
        }
	}
}
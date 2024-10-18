package com.flassari.swfclassexplorer.data {
	public class MultiName extends AbcQName {
		public var nsset:Array;
		
		public function MultiName(nsset:Array, localName:String) {
			super(localName);
			this.nsset = nsset;
		}
	}
}
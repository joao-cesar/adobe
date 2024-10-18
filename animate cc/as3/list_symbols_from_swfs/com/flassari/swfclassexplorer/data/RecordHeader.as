package com.flassari.swfclassexplorer.data {
	public class RecordHeader {
		public var tagCode:int;
		public var tagLength:int;
		
		public function RecordHeader(tag:int, length:int) {
			tagCode = tag;
			tagLength = length;
		}
		
	}
	
}
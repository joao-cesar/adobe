package com.flassari.swfclassexplorer.data {
	public class AbcNamespace {
		public var prefix:String;
		public var uri:String;
		
		public function AbcNamespace(uri:String, prefix:String = "") {
			this.uri = uri;
			this.prefix = prefix;
		}
		
	}
	
}
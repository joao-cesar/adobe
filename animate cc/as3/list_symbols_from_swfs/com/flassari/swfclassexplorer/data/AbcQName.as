package com.flassari.swfclassexplorer.data {
	public class AbcQName {
		public var localName:String;
		public var uri:String = ""; 
		
		public function AbcQName(localName:String, uri:AbcNamespace = null) {
			this.localName = localName;
			if(uri != null) this.uri = uri.uri;
		}
		
		public function toString():String {
			return (uri != null && uri.length > 0) ? uri + ":" + localName : localName;
		}
	}
}
package com.flassari.swfclassexplorer.data {
	public class ParameterizedQName extends AbcQName {
		private var parameters:Array;
		
		public function ParameterizedQName(name:AbcQName, parameters:Array) {
			super(name.localName);
			this.parameters = parameters;
		}
		
		override public function toString():String {
			if (parameters.length == 0) return super.toString() + " []";
			var s:String = super.toString() + " [";
			for each(var name:QName in parameters) s += name.toString() + ", ";
			return s.substr(0, s.length - 2) + "]";
		}
	}
}
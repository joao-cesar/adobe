package mf.system
{
	import flash.display.DisplayObject;
	import flash.geom.Rectangle;
	
	import mf.system.Mini;
	
	public class MiniInteractive extends Mini
	{
		private var _isToggled:Boolean = false;
		
		public function get isToggled():Boolean {return _isToggled;}		
		public function set isToggled(isToggled:Boolean):void {_isToggled = isToggled;}		
		
		public function MiniInteractive()
		{
		}
	}
}
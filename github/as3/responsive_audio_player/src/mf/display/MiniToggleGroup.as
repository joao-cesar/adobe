package mf.display
{
	import flash.display.DisplayObjectContainer;
	import flash.display.DisplayObject;
	
	import mf.system.Mini;
	import mf.system.MiniInteractive;
	import mf.system.MiniEvent;
	
	public class MiniToggleGroup extends Mini
	{
		public var target:DisplayObjectContainer;
		public var startToggledIndex:uint = 0;
		private var _current:MiniInteractive;
		
		public function get current():MiniInteractive {return _current;}		
		public function set current(current:MiniInteractive):void
		{			
			_current = current;
			_setToggle(current);
		}
		
		public function MiniToggleGroup()
		{			
		}
		
		override public function start():void
		{			
			if (!target)
				target = this;
			
			addEvent(this, {toggle:toggleHandler});
			
			if (target.getChildAt(startToggledIndex) is MiniInteractive)
			{
				MiniInteractive(target.getChildAt(startToggledIndex)).isToggled = true;
				_current = MiniInteractive(target.getChildAt(startToggledIndex));
			}
				
		}
		
		private function _setToggle(mi:MiniInteractive):void
		{
			var i:uint = 0;
			var total:uint = target.numChildren;
						
			for (i = 0; i < total; i++)
			{
				if (target.getChildAt(i) is MiniInteractive)
				{
					var child:MiniInteractive = MiniInteractive(target.getChildAt(i));					
					
					if (child == mi)
					{
						child.isToggled = !child.isToggled;
						_current = child;
					}						
					else
						child.isToggled = false;
				}
			}
		}
		
		public function toggleHandler(e:MiniEvent):void
		{
			current = e.target as MiniInteractive;
		}
	}
}
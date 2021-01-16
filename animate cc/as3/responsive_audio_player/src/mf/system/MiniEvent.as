package mf.system
{
	import flash.events.Event;	

	public class MiniEvent extends Event
	{
		// GENERAL
		public static const TOGGLE:String =   "toggle";
		
		public var obj:Object;

		public function MiniEvent(type:String, obj:Object, bubbles:Boolean = false, cancelable:Boolean = false)
		{
			super(type, bubbles, cancelable);
			this.obj = obj;
		}

		// always create a clone() method for events in case you want to redispatch them.
		public override function clone():Event
		{
			return new MiniEvent(type, obj, bubbles, cancelable);
		}
	}
}
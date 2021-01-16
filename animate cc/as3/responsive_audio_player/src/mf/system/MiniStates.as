package mf.system
{
	import flash.utils.setTimeout;
	import flash.display.DisplayObjectContainer;
	
	import mf.data.MiniSettings;
	
	public class MiniStates
	{
		public static var statuses:Object =
		{
			idle : MiniSettings.IDLE_STATUS,
			enter: MiniSettings.ENTER_STATUS,
			exit : MiniSettings.EXIT_STATUS
		}
		
		public static var status:String =statuses.idle;
		public static var state:MiniState;
		public static var delay:Number = MiniSettings.STATE_DEFAULT_DELAY;
		public static var previousState:MiniState;
		
		private static var _timeout:uint;
		private static var _container:DisplayObjectContainer;
		
		public static function change(miniState:MiniState, container:DisplayObjectContainer, transitionDelay:Number = -1):void
		{
			if (status == statuses.exit)
				return;
			
			_container = container;
			state = miniState;
			status = statuses.exit;			
			
			if (previousState)
				previousState.exit();
			
			if (transitionDelay < 0)
				delay = MiniSettings.STATE_DEFAULT_DELAY;
			else
				delay = transitionDelay;
			
			_timeout = setTimeout(_exit, delay * 1000);
		}
		
		private static function _exit():void
		{
			if (status == statuses.idle || status == statuses.enter)
				return;
			
			status = statuses.enter;
			
			if (previousState)
				previousState.clear();
			
			previousState = state;
			_container.addChild(state);
			state.enter(_container);			
		}
	}
}
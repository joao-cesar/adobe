package mf.data
{
	import fl.motion.easing.*;
	
	public final class MiniSettings
	{
		public static const LOOPER:String =              "___looper___";
		public static const TWEEN_DELAY:Number =         0;
		public static const TWEEN_FUNC:Function =        Linear.easeInOut;
		public static const TWEEN_USE_SECONDS:Boolean =  true;
		public static const TWEEN_DURATION:Number =      0.35;
		public static const TWEEN_DIRECTION:String =     "to";
		public static const NO_TWEEN_IN_PROPS:Object =   {visible:true};
		public static const NO_TWEEN_OUT_PROPS:Object =  {visible:false};
		public static const TWEEN_IN_PROPS:Object =      {x:0, y:0};
		public static const TWEEN_OUT_PROPS:Object =     {x:0, y:0};
		
		public static const IDLE_STATUS:String =         "idleStatus";
		public static const ENTER_STATUS:String =        "enterStatus";
		public static const EXIT_STATUS:String =         "exitStatus";
		
		public static const STATE_DEFAULT_DELAY:Number = 0;
	}
}
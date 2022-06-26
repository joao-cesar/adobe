package mf.motion
{
	import fl.transitions.Tween;
	import fl.transitions.easing.*;
	import fl.transitions.TweenEvent;
	import flash.utils.setTimeout;

	public class MiniTween
	{
		private static var _tweens:Vector.<Tween> = new Vector.<Tween>();

		public static function get tweens():Vector.<Tween> {return _tweens;}
		public static function set tweens(tweens:Vector.<Tween>):void {_tweens = tweens;}
		
		public static function to(obj:Object, props:Object, duration:Number = 0.35):void
		{
			if (!props.delay) props.delay = MiniSettings.TWEEN_DELAY;
			if (!props.ease) props.ease = MiniSettings.TWEEN_FUNC;
			if (!props.useSeconds) props.useSeconds = MiniSettings.TWEEN_USE_SECONDS;

			setTimeout(function ():void
			{
				for (var key:Object in props)
				{					
					if (obj.hasOwnProperty(key))
					{
						if (!(obj[key] is Boolean)) _tweens.push(new Tween(obj, String(key), props.ease, obj[key], props[key], duration, props.useSeconds));
						else obj[key] = props[key];
					}
				}
			}, props.delay * 1000);
		}
		
		public static function from(obj:Object, props:Object, duration:Number = 0.35):void
		{
			var immediateRender:Boolean = true;
			var reverse:Boolean = true;
			var props2:Object = new Object();
			
			if (!props.delay) props.delay = MiniSettings.TWEEN_DELAY;
			if (!props.ease) props.ease = MiniSettings.TWEEN_FUNC;
			if (!props.useSeconds) props.useSeconds = MiniSettings.TWEEN_USE_SECONDS;
			if (!props.immediateRender) immediateRender = true;			
			
			if (immediateRender)
			{
				for (var key:Object in props)
				{
					if (obj.hasOwnProperty(key))
					{
						props2[key] = obj[key];
					}
				}
			}
			
			var func:Function = function ():void
			{
				for (var key:Object in props)
				{
					if (obj.hasOwnProperty(key))
					{
						if (immediateRender)
						{
							obj[key] = props[key];
						}
						else
						{
							if (reverse)
							{
								if (!(obj[key] is Boolean)) _tweens.push(new Tween(obj, String(key), props.ease, obj[key], props2[key], duration, props.useSeconds));
								else obj[key] = props2[key];
							}
							else
							{
								if (!(obj[key] is Boolean)) _tweens.push(new Tween(obj, String(key), props.ease, props[key], obj[key], duration, props.useSeconds));
								else obj[key] = props[key];
							}
						}	
					}
				}
				
				if (immediateRender) reverse = true;
				immediateRender = false;
			};
			
			func();
			
			setTimeout(func, props.delay * 1000);
			
		}
	}
}
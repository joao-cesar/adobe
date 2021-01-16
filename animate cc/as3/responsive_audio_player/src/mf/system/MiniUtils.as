package mf.system
{
	import flash.utils.getDefinitionByName;
	import flash.utils.getQualifiedClassName;
	
	public class MiniUtils
	{
		public static function clamp(val:Number, min:Number, max:Number):Number
		{
			return Math.max(min, Math.min(max, val))
		}
		
		public static function getClass(obj:Object):Class
		{
		   return Class(getDefinitionByName(getQualifiedClassName(obj)));
		}
		
		public static function lerp(y1:Number, y2:Number, f:Number):Number
		{
			 return f * y1 + (1 - f) * y2;
		}
		
		public static function timecode(milliseconds:Number):Object
		{
			var seconds:int = Math.floor((milliseconds/1000) % 60);
			var strSeconds:String = (seconds < 10) ? ("0" + String(seconds)):String(seconds);
			var minutes:int = Math.round(Math.floor((milliseconds/1000)/60));
			var strMinutes:String = (minutes < 10) ? ("0" + String(minutes)):String(minutes);
			var strMilliseconds:String = milliseconds.toString();
			strMilliseconds = strMilliseconds.slice(strMilliseconds.length -3, strMilliseconds.length);
			
			var timeCode:Object =
			{
				seconds:     strSeconds,
				minutes:     strMinutes,
				milliseconds:strMilliseconds
			};
			
			return timeCode;
		}
	}
}
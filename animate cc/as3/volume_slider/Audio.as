package
{
	import flash.media.SoundChannel;
	import flash.media.SoundTransform;	
	import flash.media.Sound;

	public class Audio
	{
		public static var channels:Object = {};
		
		public static function play(sound:*, channel:String, volume:Number = 1, loops:uint = 0):void
		{
			var soundTransform:SoundTransform = new SoundTransform();
			
			if (!channels[channel])
				channels[channel] = new SoundChannel();

			channels[channel] = sound.play(0, loops);
			soundTransform.volume = volume;
			channels[channel].soundTransform = soundTransform;
		}
		
		public static function stop(channel:String):void
		{
			if (channels[channel])
				channels[channel].stop();
		}
		
		public static function volume(channel:String, volume:Number):void
		{
			if (channels[channel])
			{
				var soundTransform:SoundTransform = new SoundTransform();				
				soundTransform.volume = volume;
				channels[channel].soundTransform = soundTransform;
			}
		}
	}
}
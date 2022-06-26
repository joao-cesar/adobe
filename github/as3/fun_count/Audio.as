package
{
	import flash.media.SoundTransform;
	import flash.media.SoundChannel;

	public class Audio
	{
		public static function play(sound:*, volume:Number = 1):void
		{
			var soundTransform:SoundTransform = new SoundTransform();
			var channel:SoundChannel = new SoundChannel();
			
			channel = sound.play();
			soundTransform.volume = volume;
			channel.soundTransform = soundTransform;
		}
	}
}
package
{
	import flash.media.SoundChannel;

	public class Audio
	{
		public static var channel:SoundChannel = new SoundChannel();
		
		public static function play(sound:*, resetChannel:Boolean = false):void
		{
			if (!channel || resetChannel)
				channel = new SoundChannel();
			
			channel.stop();
			channel = sound.play();
		}
	}
}
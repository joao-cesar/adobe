package
{
	import flash.display.MovieClip;
	import flash.display.SimpleButton;
	import flash.events.MouseEvent;
	import flash.media.Sound;
	import flash.media.SoundChannel;
	import flash.media.SoundTransform;
	import flash.net.URLRequest;
	import flash.utils.setTimeout;
	
	public class SoundPlayer
	{
		public static var bgmChannel:SoundChannel = new SoundChannel();
		public static var sfxChannel:SoundChannel = new SoundChannel();
		
		public static function playSound(path:String, channelType:String, volume:Number = 1, start:Number = 0, loops:int = 0):void
		{
			var sound:Sound = new Sound();	
			var sTransform:SoundTransform = new SoundTransform();
			
			sound.load(new URLRequest(path));	
			
			if (channelType == "bgm")
			{
				bgmChannel.stop();
				bgmChannel = sound.play(start, loops);
				sTransform.volume = volume;
				bgmChannel.soundTransform = sTransform;
			}		
			else if (channelType == "sfx")
			{
				sfxChannel.stop();
				sfxChannel = sound.play(start, loops);
				sTransform.volume = volume;
				sfxChannel.soundTransform = sTransform;
			}
		}
	}
}
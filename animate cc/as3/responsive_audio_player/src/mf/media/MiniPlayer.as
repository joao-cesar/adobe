package mf.media
{
	import flash.media.Sound;
	import flash.media.SoundChannel;
	import flash.media.SoundTransform;
	import flash.net.URLRequest;
	import flash.events.Event;
	
	public class MiniPlayer
	{
		public static var sound:Sound;
		public static var sChannel:SoundChannel;
		public static var sTransform:SoundTransform;
		public static var channelPosition:Number = 0;
		public static var seeking:Boolean = false;
		public static var playing:Boolean = false;
		public static var paused:Boolean = false;
		public static var stopped:Boolean = false;
		public static var volume:Number = 1;
		public static var changingVolume:Boolean = false;
		
		public static function change():void
		{		
		}
		
		public static function clear():void
		{
			if (sChannel)
				sChannel.stop();
			
			sound = null;
			sChannel = null;
			sTransform = null;
			channelPosition = 0;
			seeking = false;
			playing = false;
			paused = false;
			stopped = false;
			volume = 1;
			changingVolume = false;
		}
		
		public static function changeVolume():void
		{	
			sTransform.volume = volume;
			sChannel.soundTransform = sTransform;
		}

		public static function pause():void
		{
			channelPosition = sChannel.position;
			sChannel.stop();
			
			playing = false;
			paused =  true;
			stopped = false;
		}

		public static function loadAndPlay(path:String, start:Number = -1, vol:Number = -1, loops:int = 0):void
		{
			if (vol == -1)
				vol = volume;
			
			if (start == -1)
				start = channelPosition;
			
			if (sChannel)
				sChannel.stop();
			
			sound = new Sound();	
			sTransform = new SoundTransform();	
			sound.load(new URLRequest(path));
			sChannel = sound.play(start, loops);	
			sTransform.volume = vol;
			sChannel.soundTransform = sTransform;
			
			playing = true;
			paused =  false;
			stopped = false;
		}
		
		public static function play():void
		{
			if (sChannel)
				sChannel.stop();
			
			sChannel = sound.play(channelPosition);
			
			playing = true;
			paused =  false;
			stopped = false;
		}

		public static function stop():void
		{
			if (sChannel)
			{
				sChannel.stop();
				channelPosition = 0;
			}
			
			playing = false;
			paused =  false;
			stopped = true;
		}
	}
}
package player.ui
{
	import flash.media.ID3Info;
	import flash.media.Sound;
	import flash.events.Event;
	import flash.net.URLRequest;
	import flash.text.TextFieldAutoSize;
	import flash.display.MovieClip;
	
	import mf.display.MiniButton;

	public class Row extends MiniButton
	{	
		public function Row()
		{			
		}
		
		override public function start():void
		{			
			frames.title.txt.autoSize = TextFieldAutoSize.LEFT;
			frames.artist.txt.autoSize = TextFieldAutoSize.LEFT;
			frames.album.txt.autoSize = TextFieldAutoSize.LEFT;
			frames.duration.txt.autoSize = TextFieldAutoSize.RIGHT;
		}
		
		public function loadID3Info(path:String):void
		{	
			var sound:Sound;			 
			sound = new Sound();
			sound.load(new URLRequest(path));
			sound.addEventListener(Event.ID3, _id3InfoHandler);
		}
		
		private function _id3InfoHandler(e:Event):void
		{
			var id3:ID3Info = e.currentTarget.id3;			
			
			if (id3.songName)
				frames.title.txt.text =  id3.songName;
			
			if (id3.artist)
				frames.artist.txt.text = id3.artist;
			
			if (id3.album)
				frames.album.txt.text = id3.album;		
		}
	}
}
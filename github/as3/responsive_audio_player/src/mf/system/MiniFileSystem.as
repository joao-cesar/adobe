package mf.system
{
	import flash.events.Event;
	import flash.filesystem.File;
	import flash.display.Sprite;

	public class MiniFileSystem extends Sprite
	{
		public var files:Array = [];
		
		public function MiniFileSystem()
		{
			
		}
		
		public function listDir(dir:String):Array
		{
			var desktop:File = File.applicationDirectory.resolvePath(dir);
			return desktop.getDirectoryListing();
		}
		
		public function browse():void
		{	
			var directory:File = File.documentsDirectory;
			
			try
			{
				directory.browseForDirectory("Select folder.");
				directory.addEventListener(Event.SELECT, function(e:Event):void
				{
					directory = e.target as File;
					files = directory.getDirectoryListing();
					stage.dispatchEvent(new Event(Event.SELECT, true, false));
				});
			}
			catch (error:Error)
			{
				trace("Failed:", error.message);
			}
		}
	}
}
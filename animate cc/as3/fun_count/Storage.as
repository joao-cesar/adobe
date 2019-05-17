package
{
	import flash.filesystem.FileStream;
	import flash.filesystem.File;
	import flash.filesystem.FileMode;
	import flash.utils.ByteArray;
	import flash.events.Event;
	import flash.events.IOErrorEvent;

	public class Storage
	{
		public static function save(filePath:String,
								saveString:String,
								completeFunction:Function = null,
								errorFunction:Function = null,
								directory:String = "documentsDirectory"):void
		{
			var fs:FileStream = new FileStream();
			var file:File = File[directory].resolvePath(filePath);
			var bytes:ByteArray = new ByteArray();
			
			file.addEventListener(Event.COMPLETE, function(e:Event):void
			{
				if (completeFunction != null)
					completeFunction(e);
			});
			
			file.addEventListener(IOErrorEvent.IO_ERROR, function(e:IOErrorEvent):void
			{
				if (errorFunction != null)
					errorFunction(e);
				
				trace(e.text);
			});
			
			fs.open(file, FileMode.APPEND);
			bytes.writeUTFBytes(saveString);
			fs.writeBytes(bytes);
			fs.close();
		}
		
		public static function load(filePath:String,
								completeFunction:Function = null,
								errorFunction:Function = null,
								directory:String = "documentsDirectory"):void
		{
			var file:File = File[directory].resolvePath(filePath);
			
			file.addEventListener(Event.COMPLETE, function(e:Event):void
			{
				var file:File = e.target as File;
				var bytes:ByteArray = file.data as ByteArray;
				
				if (completeFunction != null)
					completeFunction(e, bytes);
			});
			
			file.addEventListener(IOErrorEvent.IO_ERROR, function(e:IOErrorEvent):void
			{
				if (errorFunction != null)
					errorFunction(e);
				
				trace(e.text);
			});
			
			file.load();
		}
	}
}
package
{
	import flash.text.TextField;
	
	public class Dialog
	{
		public var textCount:uint = 0;
		public var line:String;
		public var userInputs:Array = [];
		public var tf:TextField;
		public var texts:Array;
		public var maxLineLength:int = -1;
		public var callBacks:Object = null;
		public var typing:Boolean = false;
		
		public function Dialog()
		{
			
		}
		
		public function type():void
		{
			
		}
		
		public function next():void
		{
			if (typing || textCount >= texts.length)
				return;
			
			if (texts[textCount].items && callBacks && callBacks.confirm)
				callBacks.confirm();
			
			textCount++;
			type();
		}
		
		public function moveUp():void
		{
			if (callBacks && callBacks.highlight)
				callBacks.highlight();
			
			arrowPress(-1);
		}
		
		public function moveDown():void
		{
			if (callBacks && callBacks.highlight)
				callBacks.highlight();
			
			arrowPress(1);
		}
		
		public function checkIfSelection():void
		{
			if (texts[textCount].items)
			{
				for (var i:uint = 0, total:uint = texts[textCount].items.length; i < total; i++)
				{
					if (i == 0 && texts[textCount].title && texts[textCount].title != "")
						tf.appendText(texts[textCount].title);
						
					tf.appendText(texts[textCount].items[i]);
				}
				
				changeCursor();
			}
		}
		
		public function checkIfEnd():Boolean
		{
			if (textCount >= texts.length)
			{
				if (callBacks && callBacks.end)
					callBacks.end();
				
				return true;
			}
			else
				return false;
		}

		public function arrowPress(offset:int):void
		{
			if (texts[textCount].items)
			{
				resetLine();
				tf.scrollV = tf.scrollV + offset;
				changeCursor();
			}
		}

		public function resetLine():void
		{
			if (line)
				tf.text = tf.text.replace(line, texts[textCount].items[tf.scrollV - 1]);		
		}

		public function getCurrentLine():String
		{
			return tf.getLineText(tf.numLines - (tf.numLines - tf.scrollV) + 1);
		}

		public function changeCursor():void
		{
			const ITEMS:Object = texts[textCount].items;
			const CURSOR:Object = texts[textCount].cursor;
			
			line = getCurrentLine();
			userInputs[textCount] = {text:ITEMS[tf.scrollV - 1], textCount:tf.scrollV - 1};
			tf.text = tf.text.replace(line, CURSOR + ITEMS[tf.scrollV - 1].substr(CURSOR.length));
			line = getCurrentLine();
		}
	}
}
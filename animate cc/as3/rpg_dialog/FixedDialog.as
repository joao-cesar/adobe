package
{
	import flash.utils.clearInterval;
	import flash.utils.setInterval;
	import flash.text.TextField;

	public class FixedDialog extends Dialog
	{
		public var typeDelay:Number = 0.1;

		public function FixedDialog(tf:TextField, texts:Array, textCount:uint = 0, maxLineLength:int = -1, typeDelay:Number = 0.1, callBacks:Object = null)
		{
			super();
			this.tf = tf;
			this.texts = texts;
			this.textCount = textCount;
			this.maxLineLength = maxLineLength;
			this.typeDelay = typeDelay;
			this.callBacks = callBacks;
			type();
		}

		override public function type():void
		{
			if (checkIfEnd())
				return;

			var interval:uint = 0;
			var charCount:uint = 0;

			var intervalCallback:Function = function ():void
			{
				var char:String = texts[textCount].text.charAt(charCount++ % texts[textCount].text.length);

				tf.scrollV++;

				if (maxLineLength > -1 && charCount > tf.numLines * maxLineLength && char == " ")
					tf.appendText("\n");
				else
					tf.appendText(char);

				if (charCount == texts[textCount].text.length)
				{
					typing = false;

					clearInterval(interval);

					if (callBacks && callBacks.wait)
						callBacks.wait();

					checkIfSelection();
				}

				if (callBacks && callBacks.typing)
					callBacks.typing();
			};

			typing = true;
			tf.text = "";
			interval = setInterval(intervalCallback, typeDelay * 1000);

			if (callBacks && callBacks.start)
				callBacks.start();
		}
	}
}
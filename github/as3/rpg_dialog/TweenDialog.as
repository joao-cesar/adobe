package
{
	import fl.motion.easing.*;
	import fl.transitions.Tween;
	import fl.transitions.TweenEvent;
	import flash.text.TextField;
	
	public class TweenDialog extends Dialog
	{
		public var tweenParams:Object = null;
		
		public function TweenDialog(tf:TextField, texts:Array, textCount:uint = 0, maxLineLength:int = -1, tweenParams:Object = null, callBacks:Object = null)
		{
			super();
			this.tf = tf;
			this.texts = texts;
			this.textCount = textCount;
			this.maxLineLength = maxLineLength;			
			this.tweenParams = tweenParams;
			this.callBacks = callBacks;
			tf.mouseEnabled = true;
			tf.mouseWheelEnabled = true;
			type();
		}
		
		override public function type():void
		{
			if (checkIfEnd())
				return;
			
			var duration:Number;
			
			if (!tweenParams)
				tweenParams = {};
				
			if (tweenParams.charDuration)
				duration = texts[textCount].text.length * tweenParams.duration;
			else
				duration = tweenParams.duration;
			
			const TARGET:Object = {count:0};
			const TWEEN:Tween = new Tween(TARGET, "count", tweenParams.ease || Linear.easeInOut, 0, texts[textCount].text.length - 1, duration || 1, true);
			var char:String;
			var prevChar:String;
			
			var motionChangeHandler:Function = function(e:TweenEvent):void
			{	
				char = texts[textCount].text.charAt(TARGET.count);
				trace(TARGET.count);
				
				tf.scrollV++;
				
				if (prevChar != char)
				{
					if (maxLineLength > -1 && TARGET.count > tf.numLines * maxLineLength && char == " ")
						tf.appendText("\n");					
					else
						tf.appendText(char);
					
					if (callBacks && callBacks.typing)
						callBacks.typing();
				}
				
				prevChar = char;
			};
			
			var motionFinishHandler:Function = function(e:TweenEvent):void
			{
				typing = false;
				
				if (callBacks && callBacks.wait)
						callBacks.wait();
					
				checkIfSelection();
				
				TWEEN.removeEventListener(TweenEvent.MOTION_CHANGE, motionChangeHandler);
				TWEEN.removeEventListener(TweenEvent.MOTION_FINISH, motionFinishHandler);
			};
			
			typing = true;

			tf.text = "";
			TWEEN.addEventListener(TweenEvent.MOTION_CHANGE, motionChangeHandler);
			TWEEN.addEventListener(TweenEvent.MOTION_FINISH, motionFinishHandler);
			
			if (callBacks && callBacks.start)
				callBacks.start();
		}
	}
}
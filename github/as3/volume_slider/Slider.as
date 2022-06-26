package
{
	import flash.display.Sprite;
	import flash.events.Event;
	import flash.events.MouseEvent;
	import flash.geom.Rectangle;

	public class Slider extends Sprite
	{
		public var ratio:Number;
		public var callBacks:Object = {};
		
		public function Slider()
		{
			if (stage)
				start(null);
			else
				addEventListener(Event.ADDED_TO_STAGE, start);
		}
		
		public function start(e:Event):void
		{
			ratio = getRatio();
			
			removeEventListener(Event.ADDED_TO_STAGE, start);
			addEventListener(MouseEvent.MOUSE_DOWN, _startMovingButton);
		}
		
		public function getRatio():Number
		{
			return button.x / (rec.width - button.width);
		}
		
		private function _startMovingButton(e:MouseEvent):void
		{
			stage.addEventListener(MouseEvent.MOUSE_MOVE, _moveButton);
			stage.addEventListener(MouseEvent.MOUSE_UP, _stopMovingButton);
		}
		
		private function _moveButton(e:MouseEvent):void
		{
			button.x = mouseX;
			
			if (button.x < 0)
				button.x = 0;
			else if (button.x > rec.width - button.width)
				button.x = rec.width - button.width;
			
			ratio = getRatio();
			
			if (callBacks.update)
				callBacks.update(ratio);
		}
		
		private function _stopMovingButton(e:MouseEvent):void
		{
			stage.removeEventListener(MouseEvent.MOUSE_MOVE, _moveButton);
			stage.removeEventListener(MouseEvent.MOUSE_UP, _stopMovingButton);
		}		
	}
}
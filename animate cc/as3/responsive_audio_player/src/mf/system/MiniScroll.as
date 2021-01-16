package mf.system
{
	import flash.events.Event;
	import flash.events.MouseEvent;
	import flash.geom.Rectangle;
	import flash.display.Sprite;
	
	import mf.system.MiniInteractive;

	public dynamic class MiniScroll extends MiniInteractive
	{
		public var clickedY:Number;
		public var isDragging:Boolean = false;
		public var maxSpeedY:Number = 100;
		public var speedY:Number = 0;
		public var frictionY:Number = 0.95;
		public var boundsFrictionY:Number = 0.85;
		public var visibleArea:Rectangle;
		
		public function MiniScroll()
		{
		}
		
		override public function start():void
		{
			Mini.enterFrameList.push(this);
			Mini.mouseList.push(this);			
			visibleArea = setScrollRect(this, this.___scrollWindow___);
			
			addEvent(this, {mouseDown:_mouseHandler});
		}
		
		private function _mouseHandler(e:MouseEvent):void
		{
			if (e.type == MouseEvent.MOUSE_DOWN)
			{
				clickedY = parent.mouseY
				isDragging = true;
			}			
		}
		
		public function enterFrame(e:Event, deltaTime:Number):void
		{			
			if (isDragging)
				speedY = clickedY - parent.mouseY;
			
			speedY *= frictionY;
			visibleArea.y += int(speedY * deltaTime * 50);
			
			if (!isDragging)
			{
				if (visibleArea.y < -this.___scrollArea___.height * 0.5)
					visibleArea.y = MiniUtils.lerp(visibleArea.y, -this.___scrollArea___.height * 0.5, boundsFrictionY);
				else if (visibleArea.y > -height * 0.25)
					visibleArea.y = MiniUtils.lerp(visibleArea.y, -height * 0.25, boundsFrictionY);
			}
			
			scrollRect = visibleArea;
			
			clickedY = parent.mouseY;
		}
		
		public function stageMouse(e:MouseEvent):void
		{
			if (e.type == MouseEvent.MOUSE_UP)
				isDragging = false;
			else if (e.type == MouseEvent.MOUSE_WHEEL)
				speedY -= e.delta;
			
		}		
	}
}
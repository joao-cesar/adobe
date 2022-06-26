package mf.display
{
	import flash.events.Event;
	import flash.events.MouseEvent;
	import flash.geom.Rectangle;
	import flash.display.Sprite;
	import flash.display.DisplayObject;
	
	import mf.system.MiniInteractive;
	import mf.system.MiniUtils;

	public dynamic class MiniScroll extends MiniInteractive
	{
		public var speedY:Number = 0;
		public var frictionY:Number = 0.85;
		public var forceY:int = 100;
		public var bottomEdgeTolerance:Number = 0.85;
		
		public function MiniScroll()
		{
		}
		
		override public function start():void
		{
		}
		
		public function loop(e:Event, delta:Number):void
		{			
			speedY *= frictionY;			
			content.y += speedY * delta * forceY;
			
			if (content.y > 0)
				content.y = int(MiniUtils.lerp(content.y, 0, frictionY));
			else if (content.y < -content.height * bottomEdgeTolerance)
				content.y = int(MiniUtils.lerp(content.y, -content.height * bottomEdgeTolerance, frictionY));
		}
		
		public function stageMouse(e:MouseEvent):void
		{
			if (e.type == MouseEvent.MOUSE_WHEEL)
				speedY += e.delta;
		}		
	}
}
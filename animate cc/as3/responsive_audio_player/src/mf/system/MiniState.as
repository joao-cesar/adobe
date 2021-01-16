package mf.system
{
	import flash.events.Event;
	import flash.display.Sprite;
	import flash.events.MouseEvent;
	import flash.utils.getTimer;
	import flash.display.DisplayObjectContainer;
	
	import mf.data.MiniSettings;	
	import player.data.Settings;
	
	public class MiniState extends Sprite
	{
		public var looper:Sprite;		
		public var stageHeight:uint = Settings.STAGE_HEIGHT;
		
		private var _startTime:uint = 0;
		
		public function MiniState()
		{
			addEventListener(Event.ADDED_TO_STAGE, _addedToStageHandler);
		}
		
		public function enter(container:DisplayObjectContainer):void
		{
			
		}
		
		public function exit():void
		{
			
		}
		
		public function loop(e:Event, delta:Number):void
		{
			
		}
		
		public function resize(e:Event):void
		{
			
		}
		
		public function stageMouse(e:MouseEvent):void
		{
			
		}
		
		public function clear():void
		{
			if (stage)
				this.parent.removeChild(this);
		}
		
		private function _resizeHandler(e:Event):void
		{			
			resize(e);
		}
		
		private function _enterFrameHandler(e:Event):void
		{			
			var currentTime:uint = getTimer();
			var delta:Number = (currentTime - _startTime) * 0.001;
			
			_startTime = currentTime;			
			loop(e, delta);
		}
		
		private function _mouseHandler(e:MouseEvent):void
		{
			stageMouse(e);
		}
		
		private function _addedToStageHandler(e:Event):void
		{
			removeEventListener(Event.ADDED_TO_STAGE, _addedToStageHandler);
			
			if (stage.getChildByName(MiniSettings.LOOPER))
				return;
			
			looper = new Sprite();
			looper.name = MiniSettings.LOOPER;
			stage.addChild(looper);
			looper.stage.addEventListener(Event.ENTER_FRAME,      _enterFrameHandler);
			looper.stage.addEventListener(Event.RESIZE,           _resizeHandler);
			looper.stage.addEventListener(MouseEvent.MOUSE_UP,    _mouseHandler);
			looper.stage.addEventListener(MouseEvent.MOUSE_WHEEL, _mouseHandler);
		}
	}
}
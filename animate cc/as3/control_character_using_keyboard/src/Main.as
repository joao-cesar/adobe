package
{
	import flash.display.MovieClip;
	import flash.events.Event;
	import flash.events.KeyboardEvent;
	import flash.events.MouseEvent;
	import flash.events.TimerEvent;
	import flash.utils.getTimer;
	import flash.utils.Timer;
	
	public class Main extends MovieClip
	{
		private var _gravity:Number = 1200;
		private var _baseFrameRate:uint = 60;
		private var _startTime:uint;
		private var _deltaTime:Number;
		private var _timer:Timer;
		
		public function Main()
		{
			_startTime = getTimer();
			_timer = new Timer(1000 / _baseFrameRate, 0);
			_timer.start();
			_timer.addEventListener(TimerEvent.TIMER, _timerHandler);
			stage.addEventListener(KeyboardEvent.KEY_DOWN, _keyDownHandler);
			stage.addEventListener(KeyboardEvent.KEY_UP, _keyUpHandler);
			stage.addEventListener(MouseEvent.CLICK, _clickHandler);
			stage.addEventListener(Event.ENTER_FRAME, _enterFrameHandler);
		}
	
		private function _timerHandler(e:TimerEvent):void
		{
			player.timerHandler();
		}
	
		private function _keyDownHandler(e:KeyboardEvent):void
		{			
			player.keyDownHandler(e.keyCode);
		}
	
		private function _keyUpHandler(e:KeyboardEvent):void
		{
			player.keyUpHandler(e.keyCode);
		}
	
		private function _clickHandler(e:MouseEvent):void
		{
			if (e.target.name && e.target.name.indexOf("fps") == 0)
			{
				highlight.x = e.target.x;
				highlight.y = e.target.y;
				stage.frameRate = uint(e.target.name.replace("fps", ""));
			}
		}
	
		private function _enterFrameHandler(e:Event):void
		{
			_updateDeltaTime();
			player.enterFrameHandler(_deltaTime);
			_checkWorldBounds();
		}
	
		private function _updateDeltaTime():void
		{
			var currentTime:uint = getTimer();
			_deltaTime = (currentTime - _startTime) * 0.001;
			_startTime = currentTime;
		}
	
		private function _checkWorldBounds():void
		{			
			if (player.y < ground.y - player.vY * _deltaTime)
			{
				player.y += player.vY * _deltaTime;
				player.vY += _gravity * _deltaTime;
				player.onGround = false;
			}
			else
			{
				player.y = ground.y;
				player.onGround = true;
			}
								
			if (player.x < 0)
				player.x = 0;
			
			if (player.x > stage.stageWidth)
				player.x = stage.stageWidth;
		}
	}
}
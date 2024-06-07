package
{
	import flash.display.MovieClip;
	import flash.geom.Matrix;
	import flash.ui.Keyboard;
	
	public class Player extends MovieClip
	{
		public var vX:Number = 0;
		public var vY:Number = 0;
		public var moveImpulse:Number = 4;
		public var facing:int = 1;
		public var matrix:Matrix;
		
		private var _keys:Object;
		
		public function Player()
		{
			_keys = {};
		}
	
		public function keyDownHandler(keys:Object):void
		{
			_keys = keys;
		}
	
		public function keyUpHandler(keys:Object):void
		{
			_keys = keys;
		}
	
		public function enterFrameHandler():void
		{
			_moveLeft();
			_moveRight();
			_setAnims();
			
			x += vX;
			y += vY;
		}
	
		private function _moveLeft():void
		{
			if (_keys[Keyboard.LEFT])
			{
				vX = -moveImpulse;
				facing = -1;
			}
			
			if (_keys[Keyboard.RIGHT])
			{
				vX = moveImpulse;
				facing = 1;
			}
			
			if (!_keys[Keyboard.LEFT] && !_keys[Keyboard.RIGHT])
				vX = 0;
		}
	
		private function _moveRight():void
		{
			if (_keys[Keyboard.UP])
				vY = -moveImpulse;
			
			if (_keys[Keyboard.DOWN])
				vY = moveImpulse;
			
			if (!_keys[Keyboard.UP] && !_keys[Keyboard.DOWN])
				vY = 0;
		}
	
		private function _setAnims():void
		{
			if (_keys[Keyboard.LEFT] || _keys[Keyboard.RIGHT] || _keys[Keyboard.UP] || _keys[Keyboard.DOWN])
				gotoAndStop("walk");
			else
				gotoAndStop("idle");
		}
	}
}
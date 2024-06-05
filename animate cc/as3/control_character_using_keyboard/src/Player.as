package
{
	import flash.display.MovieClip;
	import flash.ui.Keyboard;
	
	public class Player extends MovieClip
	{
		public var walkImpulse:Number = 350;
		public var jumpImpulse:Number = 800;
		public var onGround:Boolean = false;
		public var anims:Object =
		{
			idle: { name: "idle", loop: true },
			walk: { name: "walk", loop: true },
			jump: { name: "jump", loop: false },
			attack: { name: "attack", loop: false }
		};
		public var vX:Number = 0;
		public var vY:Number = 0;
		public var keysPressed:Object;
		
		private var _deltaTime:Number;
		private var _jumpKeyPressed:Boolean = false;
		private var _attackKeyPressed:Boolean = false;
		private var _isAttacking:Boolean = false;
		private var _currentAnim:MovieClip;
		
		public function Player()
		{
			keysPressed = {};
			_currentAnim = getChildAt(0) as MovieClip;
		}
	
		public function keyDownHandler(keyCode:uint):void
		{
			keysPressed[keyCode] = true;
		}
	
		public function keyUpHandler(keyCode:uint):void
		{
			delete keysPressed[keyCode];
		}
	
		public function enterFrameHandler(deltaTime:Number):void
		{
			_deltaTime = deltaTime;
			
			if (keysPressed[Keyboard.LEFT] || keysPressed[Keyboard.A])
				moveLeft();
			
			if (keysPressed[Keyboard.RIGHT] || keysPressed[Keyboard.D])
				moveRight();
			
			if (keysPressed[Keyboard.UP] || keysPressed[Keyboard.W])
				jump();
			else
				_restoreJump();
			
			if (keysPressed[Keyboard.SPACE])
				attack();
			else
				_attackKeyPressed = false;
			
			_restoreAttack();
			_setIdle();
		}
	
		public function timerHandler():void
		{
			_playFrames();
		}
	
		public function moveLeft():void
		{
			vX = -walkImpulse * _deltaTime;
			x += vX;
			scaleX = -Math.abs(scaleX);
			
			if (onGround && !_isAttacking)
				gotoAndStop(anims.walk.name);
		}
	
		public function moveRight():void
		{
			vX = walkImpulse * _deltaTime;
			x += vX;
			scaleX = Math.abs(scaleX);
			
			if (onGround && !_isAttacking)
				gotoAndStop(anims.walk.name);
		}
	
		public function attack():void
		{
			if (onGround && vX == 0 && !_attackKeyPressed)
			{
				_isAttacking = true;
				_attackKeyPressed = true;
				gotoAndStop(anims.attack.name);
			}
		}
	
		public function jump():void
		{
			if (onGround && !_jumpKeyPressed)
			{
				vY = -jumpImpulse;
				onGround = false;
				_jumpKeyPressed = true;
				gotoAndStop(anims.jump.name);
			}
		}
	
		private function _restoreAttack():void
		{
			if (currentLabel == anims.attack.name)
				_isAttacking = _currentAnim.currentFrame < _currentAnim.totalFrames - 1;
			else
				_isAttacking = false;
		}
	
		private function _restoreJump():void
		{
			if (onGround)
				_jumpKeyPressed = false;
		}
	
		private function _setIdle():void
		{
			if (!keysPressed[Keyboard.LEFT] && !keysPressed[Keyboard.A] &&
				!keysPressed[Keyboard.RIGHT] && !keysPressed[Keyboard.D])
				{
					vX = 0;
					
					if (onGround && !_isAttacking)
						gotoAndStop(anims.idle.name);
				}
			}
	
		private function _playFrames():void
		{
			_currentAnim = getChildAt(0) as MovieClip;
			_currentAnim.nextFrame();

			if (anims[currentLabel].loop && _currentAnim.currentFrame >= _currentAnim.totalFrames - 1)
				_currentAnim.gotoAndStop(1);
		}
	}
}
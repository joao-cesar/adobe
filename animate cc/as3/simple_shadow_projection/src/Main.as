package
{
	import flash.display.MovieClip;
	import flash.events.Event;
	import flash.events.KeyboardEvent;

	public class Main extends MovieClip
	{
		private var _keys:Object;
		
		public function Main()
		{
			_keys = {};
		
			vanishingPoint.visible = false;
			worldBounds.visible = false;
			
			stage.addEventListener(KeyboardEvent.KEY_DOWN, _keyDownHander);
			stage.addEventListener(KeyboardEvent.KEY_UP, _keyUpHander);
			stage.addEventListener(Event.ENTER_FRAME, _enterFrameHandler);
		}
	
		private function _keyDownHander(e:KeyboardEvent):void
		{
			_keys[e.keyCode] = true;
			player.keyDownHandler(_keys);
		}
	
		private function _keyUpHander(e:KeyboardEvent):void
		{
			delete _keys[e.keyCode];
			player.keyUpHandler(_keys);
		}
	
		private function _enterFrameHandler(e:Event):void
		{
			player.enterFrameHandler();
			_setPerspective();
			_checkWorldBounds();
			_castShadowOnPlayer();
		}
	
		private function _setPerspective():void
		{
			player.scaleX = player.scaleY = player.y / (stage.stageHeight - vanishingPoint.y);
			player.scaleX *= player.facing;
		}
	
		private function _checkWorldBounds():void
		{
			if (player.y < worldBounds.y)
				player.y = worldBounds.y;
			else if (player.y > worldBounds.y + worldBounds.height)
				player.y = worldBounds.y + worldBounds.height;
		}
	
		private function _castShadowOnPlayer():void
		{
			playerShadow.x = player.x + 6;
			playerShadow.y = player.y + 8;
			player.matrix = playerShadow.transform.matrix;
			player.matrix.a = player.transform.matrix.a * 0.8; // scale X
			player.matrix.d = -player.transform.matrix.d * 0.5; // scale Y
			player.matrix.c = -(player.x / (stage.stageWidth - sun.x)) * 3; // skew x
			playerShadow.transform.matrix = player.matrix;
			playerShadow.gotoAndStop(player.currentFrame);
		}
	}
}
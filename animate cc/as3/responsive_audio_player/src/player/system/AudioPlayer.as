package player.system
{
	import flash.display.StageScaleMode;
	import flash.display.StageAlign;
	
	import mf.system.Mini;
	import mf.system.MiniStates;
	
	import player.states.MainState;
	
	public class AudioPlayer extends Mini
	{
		protected var _mainState:MainState;
		
		public function AudioPlayer()
		{
		}
		
		override public function start():void
		{
			stage.align = StageAlign.TOP_LEFT;
			stage.scaleMode = StageScaleMode.NO_SCALE;
			
			MiniStates.change(new MainState(), this);
		}
	}
}
package mf.display
{	
	import flash.display.MovieClip;
	import flash.events.MouseEvent;
	
	import mf.system.MiniInteractive;
	import mf.system.MiniEvent;

	public class MiniButton extends MiniInteractive
	{
		public var onClick:Function = function():void{};
		public var onMouseDown:Function = function():void{};
		public var togglable:Boolean = false;
		
		private var _isToggled:Boolean;
		private var _originalStates:Array = [1, 2, 3, 4]; // up, over, down, deactivated
		private var _tempStates:Array = [];
		private var _framesName:String = "frames";
		private var _frames:MovieClip;
		private var _hit = "hit";
		
		public function get originalStates():Array{return _originalStates;}
		public function set originalStates(originalStates:Array):void
		{			
			_originalStates = originalStates;
			getOriginalStates();
		}		
		
		override public function get isToggled():Boolean {return _isToggled;}		
		override public function set isToggled(isToggled:Boolean):void
		{			
			_isToggled = isToggled;			
			
			if (_isToggled)
				singleState(2);
			else
				getOriginalStates();
		}
		
		public function get framesName():String {return _framesName;}		
		public function set framesName(framesName:String):void
		{
			_framesName = framesName;
			
			if (_frames)
				_frames = this[_framesName];
		}
		
		public function MiniButton()
		{
			
		}
		
		override public function start():void
		{
			if (!this[_framesName])
				return;
			
			_frames = this[_framesName];
			_frames.stop();
			_frames.mouseChildren = false;
			
			if (this[_hit])
				this.hitArea = this[_hit];
			
			getOriginalStates();			
			
			addEvent(this, {mouseUp:_onMouseHandler, mouseOver:_onMouseHandler, mouseOut:_onMouseHandler, mouseDown:_onMouseHandler, click:_onMouseHandler});			
		}
		
		private function _onMouseHandler(e:MouseEvent):void
		{			
			if (e.type == MouseEvent.MOUSE_UP)
				getUp();
			else if (e.type == MouseEvent.MOUSE_OVER)
				getOver();
			else if (e.type == MouseEvent.MOUSE_OUT)
				getOut();
			else if (e.type == MouseEvent.MOUSE_DOWN)
				getDown();
			else if (e.type == MouseEvent.CLICK)
				getClick();			
		}
		
		public function getUp():void
		{
			_frames.gotoAndStop(_tempStates[0]);
		}
		
		public function getOver():void
		{
			_frames.gotoAndStop(_tempStates[1]);
		}
		
		public function getOut():void
		{
			_frames.gotoAndStop(_tempStates[0]);
		}
		
		public function getDown():void
		{
			onMouseDown(this);
			_frames.gotoAndStop(_tempStates[2]);
		}
		
		public function getClick():void
		{
			if (togglable)
				isToggled = !isToggled;
			
			dispatchEvent(new MiniEvent(MiniEvent.TOGGLE, this, true, false));			
			onClick(this);
		}
		
		public function getOriginalStates():void
		{
			addEvent(this, {mouseUp:_onMouseHandler, mouseOver:_onMouseHandler, mouseOut:_onMouseHandler, mouseDown:_onMouseHandler, click:_onMouseHandler});
			_tempStates = _originalStates;
			_frames.gotoAndStop(_tempStates[0]);
		}
		
		public function singleState(index:uint):void
		{
			if (!togglable)
				removeEvent(this, {mouseUp:_onMouseHandler, mouseOver:_onMouseHandler, mouseOut:_onMouseHandler, mouseDown:_onMouseHandler, click:_onMouseHandler});
				
			_tempStates = [_originalStates[index], _originalStates[index], _originalStates[index], _originalStates[index]];
			_frames.gotoAndStop(_tempStates[2]);
		}
	}
}
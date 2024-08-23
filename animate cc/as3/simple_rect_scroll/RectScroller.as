package
{
    import flash.display.Sprite;
    import flash.events.MouseEvent;
    import flash.events.Event;
    import flash.geom.Rectangle;
    import flash.geom.Point;
    import flash.utils.setTimeout;
    import flash.utils.clearTimeout;
	import flash.system.Capabilities;

    public class RectScroller extends Sprite
    {
        public static const X_AXIS:String = "xAxis";
        public static const Y_AXIS:String = "yAxis";
        public static const XY_AXIS:String = "xyAxis";

        public var axis:String = Y_AXIS;
        public var vX:Number = 0;
        public var vY:Number = 0;
        public var frictionX:Number = 0.9;
        public var frictionY:Number = 0.9;
        public var pressed:Boolean = false;
        public var pressedX:Number;
        public var pressedY:Number;
        public var pressedDeltaX:Number;
        public var pressedDeltaY:Number;
        public var wheelForceX:Number = 3;
        public var wheelForceY:Number = 3;

        private var _scrollArea:Rectangle;
        private var _originalWidth:Number;
        private var _originalHeight:Number;
        private var _timeout:uint;
        private var _tempPressedX:Number;
        private var _tempPressedY:Number;

        public function get scrollArea():Rectangle{ return _scrollArea; };

        public function set scrollArea(area:Rectangle):void
        {
            scrollRect = null;
            clearTimeout(_timeout);

            _timeout = setTimeout(function():void
            {
                _originalWidth = width;
                _originalHeight = height;
                _scrollArea = area;
                scrollRect = _scrollArea;
            }, 0);
        }

        public function RectScroller()
        {
            if (stage)
                _init();
            else
                addEventListener(Event.ADDED_TO_STAGE, _init);
        }

        private function _init(e:Event = null):void
        {
            _originalWidth = width;
            _originalHeight = height;

            addEventListener(MouseEvent.MOUSE_DOWN, _mouseDownHandler);
			
			if (!_isMobile())
				stage.addEventListener(MouseEvent.MOUSE_WHEEL, _mouseWheelHandler);
			
            stage.addEventListener(Event.ENTER_FRAME, _enterFrameHandler);
            removeEventListener(Event.ADDED_TO_STAGE, _init);
        }

        private function _mouseDownHandler(e:MouseEvent):void
        {
            if (!scrollArea || !scrollRect)
                return;

            pressed = true;

            pressedX = _tempPressedX = parent.mouseX;
            pressedY = _tempPressedY = parent.mouseY;

            stage.addEventListener(MouseEvent.MOUSE_UP, _mouseUpHandler);
        }

        private function _enterFrameHandler(e:Event):void
        {
            if (!scrollArea || !scrollRect)
                return;

            var rect:Rectangle = scrollRect;

            if (axis == X_AXIS && scrollArea.width < _originalWidth)
                _moveX(rect);
            if (axis == Y_AXIS && scrollArea.height < _originalHeight)
                _moveY(rect);
            if (axis == XY_AXIS)
            {
                if (scrollArea.width < _originalWidth)
                    _moveX(rect);

                if (scrollArea.height < _originalHeight)
                    _moveY(rect);
            }
            
            scrollRect = rect;
        }
	
		private function _mouseUpHandler(e:MouseEvent):void
        {
            pressed = false;
            pressedDeltaX = parent.mouseX - _tempPressedX;
            pressedDeltaY = parent.mouseY - _tempPressedY;
            stage.removeEventListener(MouseEvent.MOUSE_UP, _mouseUpHandler);
        }
	
		private function _mouseWheelHandler(e:MouseEvent):void
		{
			trace(e.delta);
			
			switch(axis)
			{
				case X_AXIS:
					vX += (e.delta / 3) * wheelForceX;
					break;
				case Y_AXIS:
					vY += (e.delta / 3) * wheelForceY;
					break;
				case XY_AXIS:
					vX += (e.delta / 3) * wheelForceX;
					vY += (e.delta / 3) * wheelForceY;
					break;
			}
		}

        private function _moveX(rect:Rectangle):void
        {
            if (pressed)
            {
                vX = parent.mouseX - pressedX;
                pressedX = parent.mouseX;
            }

            vX *= frictionX;
            rect.x -= vX;

            if (rect.x < _scrollArea.x)
                rect.x = _scrollArea.x;
            else if (rect.x > _originalWidth - _scrollArea.width)
                rect.x = _originalWidth - _scrollArea.width;
        }

        private function _moveY(rect:Rectangle):void
        {
            if (pressed)
            {
                vY = parent.mouseY - pressedY;
                pressedY = parent.mouseY;
            }

            vY *= frictionY;
            rect.y -= vY;

            if (rect.y < _scrollArea.y)
                rect.y = _scrollArea.y;
            else if (rect.y > _originalHeight - _scrollArea.height)
                rect.y = _originalHeight - _scrollArea.height;
        }
	
		private function _isAndroid():Boolean
		{
			return (Capabilities.version.substr(0,3) == "AND");
		}

		private function _isIOS():Boolean
		{
			return (Capabilities.version.substr(0,3) == "IOS");
		}

		private function _isMobile():Boolean
		{
			return (_isAndroid() || _isIOS());
		}
    }
}
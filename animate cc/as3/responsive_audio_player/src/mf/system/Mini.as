package mf.system
{
	import flash.events.Event;
	import flash.display.Sprite;
	
	import player.data.Settings;

	public class Mini extends Sprite
	{		
		public var startProps:Object = {};	
		public var responsive:Object = {};
		private var _startTime:uint = 0;
		
		public function Mini()
		{
			addEvent(this, {addedToStage:_addedToStageHandler});
		}
		
		private function _addedToStageHandler(e:Event):void
		{
			removeEvent(this, {addedToStage:_addedToStageHandler});
			startProps =
			{
				x:        x,
				y:        y,
				width:    width,
				height:   height,
				scaleX:   scaleX,
				scaleY:   scaleY,
				rotation: rotation
			};
			
			responsive = 
			{
				anchor:
				{
					halfWidth:function(offset:Number = 0):void
					{
						if (stage.stageWidth >= Settings.STAGE_WIDTH)
							x = stage.stageWidth * 0.5 + offset;
					},
					top:function(offset:Number = 0):void
					{
						if (stage.stageHeight >= Settings.STAGE_HEIGHT)
							y = startProps.y + offset;
					},
					left:function(offset:Number = 0):void
					{
						if (stage.stageWidth >= Settings.STAGE_WIDTH)
							x = startProps.x + offset;
					},
					right:function(offset:Number = 0):void
					{
						if (stage.stageWidth >= Settings.STAGE_WIDTH)
							x = (stage.stageWidth - (Settings.STAGE_WIDTH - startProps.x)) + offset;
					},
					bottom:function(offset:Number = 0):void
					{
						if (stage.stageHeight >= Settings.STAGE_HEIGHT)
							y = (stage.stageHeight - (Settings.STAGE_HEIGHT - startProps.y)) + offset;
					},
					proportionalX:function(proportion:Number, offset:Number = 0):void
					{
						if (stage.stageWidth >= Settings.STAGE_WIDTH)
							x = (stage.stageWidth * proportion) + offset;
					}
				},
				fit:
				{
					fullWidth:function(offset:Number = 0):void
					{
						if (stage.stageWidth >= Settings.STAGE_WIDTH)
							width = stage.stageWidth + offset;
					},
					fullHeight:function(offset:Number = 0):void
					{
						if (stage.stageHeight >= Settings.STAGE_HEIGHT)
							height = stage.stageHeight + offset;
					},
					fullArea:function(offset:Number = 0):void
					{
						if (stage.stageWidth >= Settings.STAGE_WIDTH)
							width = stage.stageWidth + offset;
						
						if (stage.stageHeight >= Settings.STAGE_HEIGHT)
							height = stage.stageHeight + offset;
					},
					scroll:function():void{}
				},
				scale:
				{
					proportionalWidth:function(offset:Number = 0):void
					{
						if (stage.stageWidth >= Settings.STAGE_WIDTH)
						{
							width =  stage.stageWidth + offset;
							height = (stage.stageWidth / (startProps.width / startProps.height)) + offset;
						}						
					},
					proportionalHeight:function(offset:Number = 0):void
					{
						if (stage.stageHeight >= Settings.STAGE_HEIGHT)
						{
							height = stage.stageHeight + offset;
							width =  (stage.stageHeight * (startProps.width / startProps.height)) + offset;
						}						
					}
				},
				group:
				{
					spaceHorizontally:function():void{}
				}
			};
			
			mouseEnabled = false;
			start();
		}
		
		public function start():void
		{	
		}
		
		public function addEvent(obj:Object, events:Object):void
		{			
			for (var key:String in events)
				if (!obj.hasEventListener(key))
					obj.addEventListener(key, events[key]);
		}
		
		public function removeEvent(obj:Object, events:Object):void
		{			
			for (var key:String in events)
				obj.removeEventListener(key, events[key]);
		}
	}
}
package mf.display
{
	import mf.system.Mini;

	public class Mini3Slice extends Mini
	{
		public var slices:Vector.<MiniSprite> = new Vector.<MiniSprite>();
		
		public function Mini3Slice()
		{
			for (var i:int = 0, total:int = numChildren; i < total; i++)
				slices[i] = getChildAt(i) as MiniSprite;
		}
		
		override public function start():void
		{
			responsive.fit.fullWidth = function(offset:Number = 0):void
			{
				slices[1].responsive.fit.fullWidth(-(slices[0].width * 2));			
				slices[2].responsive.anchor.right();
			};
		}
	}
}
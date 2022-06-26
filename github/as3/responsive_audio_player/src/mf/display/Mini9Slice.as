package mf.display
{
	import mf.system.Mini;

	public class Mini9Slice extends Mini
	{
		public var slices:Vector.<MiniSprite> = new Vector.<MiniSprite>();
		
		public function Mini9Slice()
		{
			for (var i:int = 0, total:int = numChildren; i < total; i++)
				slices[i] = getChildAt(i) as MiniSprite;
		}
		
		override public function start():void
		{
			responsive.fit.fullArea = function(offset:Number = 0):void
			{
				slices[1].responsive.fit.fullWidth(-(slices[0].width * 2));
			
				slices[2].responsive.anchor.right();
				
				slices[3].responsive.fit.fullHeight(-(slices[0].height * 2));
				
				slices[4].responsive.fit.fullWidth(-slices[0].width * 2);
				slices[4].responsive.fit.fullHeight(-(slices[0].height * 2));
				
				slices[5].responsive.anchor.right();
				slices[5].responsive.fit.fullHeight(-(slices[0].height * 2));
				
				slices[6].responsive.anchor.bottom();
				
				slices[7].responsive.anchor.bottom();
				slices[7].responsive.fit.fullWidth(-slices[0].width * 2);
				
				slices[8].responsive.anchor.right();
				slices[8].responsive.anchor.bottom();
			};
		}
	}
}
package mf.display
{
	import flash.display.MovieClip;
	
	import mf.system.Mini;
	
	import player.data.Settings;

	public class MiniList extends Mini
	{
		public function MiniList()
		{
			
		}
		
		override public function start():void
		{
			responsive.group.spaceHorizontally = function():void
			{
				if (stage.stageWidth < Settings.STAGE_WIDTH)
					return;				
				
				for (var i:int = 0, total:int = rows.numChildren; i < total; i++)
				{					
					var row:Row = rows.getChildAt(i) as Row;
					var totalWidth:Number = (stage.stageWidth - (Settings.STAGE_WIDTH - startProps.width)) * 0.95;					
					
					row.frames.title.responsive.anchor.left(10);
					row.frames.artist.x = totalWidth * 0.33;
					row.frames.album.x = totalWidth * 0.66;
					row.frames.duration.responsive.anchor.right(-10);
					row.frames.rec.rec.responsive.fit.fullWidth(-(Settings.STAGE_WIDTH - startProps.width));
				}
			};
		}
	}
}
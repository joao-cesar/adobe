package
{
	import flash.display.Sprite;
	import flash.geom.Matrix;

	public class ParallaxBackground extends Sprite
	{
		public var matrix:Matrix = new Matrix();
		public var bitmapFill:*;
		public var speedX:Number;
		public var speedY:Number;
		public var fillWidth:Number;
		public var fillHeight:Number;
		
		public function ParallaxBackground(bitmapFill:*, speedX:Number, speedY:Number, fillWidth:Number, fillHeight:Number)
		{
			this.bitmapFill = bitmapFill;
			this.speedX = speedX;
			this.speedY = speedY;
			this.fillWidth = fillWidth;
			this.fillHeight = fillHeight;
		}
		
		public function loop():void
		{			
			if (!stage)
				return;
			
			matrix.translate(speedX, speedY);
			graphics.clear();
			graphics.beginBitmapFill(bitmapFill, matrix, true, true);
			graphics.drawRect(0, 0, fillWidth, fillHeight);
		}
	}
}
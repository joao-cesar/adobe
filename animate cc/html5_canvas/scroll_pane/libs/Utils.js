class Utils
{
	static clamp(value, min, max)
	{
		if (value < min)
			return min;
		else if (value > max)
			return max;
		else
			return value;
	}
	
	static lerp(v1, v2, friction)
	{
		 return friction * v1 + (1 - friction) * v2;
	}
	
	static isMobile()
	{
		return (createjs.BrowserDetect.isAndroid || createjs.BrowserDetect.isBlackberry || createjs.BrowserDetect.isIOS || createjs.BrowserDetect.isWindowPhone);
	}
}
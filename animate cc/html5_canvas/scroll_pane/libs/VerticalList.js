class VerticalList
{
	constructor(lib, container, total, type, offset = 0, callback = null)
	{
		var thumb;
		
		for (var i = 0; i < total; i++)
		{
			thumb = new lib[type]();
			thumb.y = (thumb.nominalBounds.height + offset) * i;
			container.addChild(thumb);
			
			if (callback != null)
				callback(thumb, i);
		}
	}
}
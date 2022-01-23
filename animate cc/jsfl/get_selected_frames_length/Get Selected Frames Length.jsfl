var dom, timeline, frames, i, min, max, length, startFrames, endFrames;

function main()
{	
	dom = fl.getDocumentDOM();
	
	if (!dom)
	{
		alert("Please open up a FLA file first.");
		return;
	}

	timeline = dom.getTimeline();
	frames = timeline.getSelectedFrames();

	if (frames.length === 0)
	{
		alert("There are no frames selected.");
		return;
	}
	
	startFrames = [];
	endFrames = [];

	for (i = 1; i < frames.length; i += 3)
	{
		startFrames.push(frames[i]);
		endFrames.push(frames[i + 1]);
	}
		
	min = Math.min.apply(Math, startFrames);
	max = Math.max.apply(Math, endFrames);
	length = max - min;

	fl.trace(length);
}

main();
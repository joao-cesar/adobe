function main()
{
	var dom = fl.getDocumentDOM();

	if (!dom)
	{
		alert("Please open up a document first.");
		return;
	}

	var timeline = dom.getTimeline();
	timeline.reorderLayer(timeline.currentLayer, Math.max(0, timeline.currentLayer - 1));
}

main();
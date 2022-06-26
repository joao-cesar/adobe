function main()
{
	var dom = fl.getDocumentDOM();

	if (!dom)
	{
		alert("Please open up a document first.");
		return;
	}

	var timeline = dom.getTimeline();
	timeline.reorderLayer(timeline.currentLayer, Math.min(timeline.layers.length - 1, timeline.currentLayer + 1), false);
}

main();
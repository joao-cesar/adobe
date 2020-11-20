var dom, libray, items, layersCount, deleted;
var symbols = ["button", "graphic", "movie clip"];

function main()
{
	dom = fl.getDocumentDOM();
	
	if (!dom)
	{
		alert("Please open up a document first.");
		return;
	}
	
	var i, total;
	
	library = dom.library;
	items = library.items;
	layersCount = 0;
	deleted = 0;
	searchLibrary();
	
	for (i = 0, total = dom.timelines.length; i < total; i++)
		searchTimeline(dom.timelines[i]);
	
	alert(deleted + " layers of " + layersCount + " have been deleted");
}

function searchLibrary()
{
	var i, total, item;
	
	for (i = 0, total = items.length; i < total; i++)
	{
		item = items[i];
		
		if (symbols.indexOf(item.itemType) > -1)
			searchTimeline(item.timeline);
	}
}

function searchTimeline(timeline)
{
	var layers = timeline.layers.reverse();
	var count = 0;
	var i, total, layer;
	
	for (i = 0, total = layers.length; i < total; i++)
	{
		layer = layers[i];
		layersCount++;
		count++;
		
		if (layer.layerType !== "folder")
		{		
			var isEmpty = layer.frames.every(function(frame)
			{
				return frame.isEmpty;
			});
			
			if (isEmpty)
			{
				timeline.deleteLayer(total - count);
				deleted++;
			}			
		}
	}
}

fl.outputPanel.clear();
main();
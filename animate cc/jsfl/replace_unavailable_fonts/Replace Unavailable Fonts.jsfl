var dom, panel, foundTextsCount;
var fontsFileName = "fontinfo.txt";

var panelXML =
[
	'<dialog id="dialog" title="Change Font Style" buttons="accept, cancel">',
		'<menulist id="faces" width="175">',
			'<menupopup>',
				'<menuitem/>',
			'</menupopup>',
		'</menulist>',
	'</dialog>'
];

function main()
{
	fl.outputPanel.clear();
	dom = fl.getDocumentDOM();
	
	if (!dom)
	{
		alert("Please open up a FLA first.");
		return;
	}

	panel = fl.xmlPanelFromString(getFontsMenuString());

	if (panel.dismiss == "cancel")
		return;			
	else
	{
		foundTextsCount = 0;
		scanDocument(onElementFound);
		fl.trace("replaced the font face of " + foundTextsCount + " text field(s) on " + dom.name + " by " + panel.faces);
	}
}

function getFontsMenuString()
{	
	var fontsPath = FLfile.platformPathToURI(fl.configDirectory + fontsFileName);
	var fontsFile = FLfile.read(fontsPath);
	var fontsArray = fontsFile.split("\n");
	var xmlString = panelXML.join("\n");
	
	return xmlString.replace("<menuitem/>", createList(fontsArray));
}

function createList(array)
{
	var list = "";
	
	array.forEach(function(item, index)
	{
		var label = '"' + item.split(" ")[0].replace("<", "") + '"';
		var id = '"' + "item" + index + '"';
		
		list += '<menuitem label=' + label + ' id=' + id + '/>\n';
	});
	
	return list;
}

function scanDocument(foundElementCallback)
{
	var timeline;
	
	scanLibrary(dom.library.items, foundElementCallback);
	
	for (timeline in dom.timelines)
		scanTimeline(dom.timelines[timeline], foundElementCallback);
}

function scanLibrary(items, foundElementCallback)
{
	var index, item;
	var symbols = [ "movie clip", "graphic", "button" ];
	
	for (index in items)
	{
		item = items[index];
		
		if (symbols.indexOf(item.itemType) > -1)
			scanTimeline(item.timeline, foundElementCallback);
	}
}

function scanTimeline(timeline, foundElementCallback)
{
	var layer, frames, element, member, frameSet, elementSet, memberSet;
	var layerSet = timeline.layers;
	
	for (layer in layerSet)
	{
		frameSet = layerSet[layer].frames;
		
		for (frame in frameSet)
		{
			elementSet = frameSet[frame].elements;
			
			for (element in elementSet)
			{
				foundElementCallback(elementSet[element]);
				memberSet = elementSet[element].members;
				
				if (memberSet != undefined)
				{
					for (member in memberSet)
						foundElementCallback(memberSet[member]);
				}
			}
		}
	}
}

function onElementFound(element)
{
	if (element.elementType === "text")
	{		
		if (fl.isFontInstalled(element.getTextAttr("face")))
		{
			element.setTextAttr("face", panel.faces);
			foundTextsCount++;
		}
	}
}

main();
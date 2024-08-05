var dom, panel, textFieldsFound, textFieldsReplaced, unavailableFontFaces;
var fontsFileName = "fontinfo.txt";
var unavailableDropDownToken = "<UNAVAILABLE_LIST>";
var panelWidth = 640;

var panelXML =
[
	'<dialog id="dialog" title="Replace Unavailable Fonts" buttons="accept, cancel">',
		'<label value="Please use the TAB key to highlight the dropdowns and the SPACE key to open them up if mouse interaction doesn\'t work."/>',
		'<vbox>',
			unavailableDropDownToken,
		'</vbox>',
	'</dialog>'
];

function main()
{
	dom = fl.getDocumentDOM();
	
	if (!dom)
	{
		alert("Please open up a FLA first.");
		return;
	}
	
	textFieldsFound = 0;
	unavailableFontFaces = {};
	scanDocument(getUnavailableFontFace);

	if (textFieldsFound === 0)
	{
		alert("No text fields with unavailable font faces have been found.");
		return;
	}

	panel = fl.xmlPanelFromString(getFontsMenuString(unavailableFontFaces));

	if (panel.dismiss == "cancel")
		return;			
	else
	{
		textFieldsReplaced = 0;
		scanDocument(replaceUnavailableFontFace);
		fl.trace("replaced the font face of " + textFieldsReplaced + " text field(s) on " + dom.name);
	}
}

function getFontsMenuString(unavailableFontFaces)
{	
	var fontsPath = FLfile.platformPathToURI(fl.configDirectory + fontsFileName);
	var fontsFile = FLfile.read(fontsPath);
	var fontsArray = fontsFile.split("\n");
	var xmlString = panelXML.join("\n");
	
	return xmlString.replace(unavailableDropDownToken, createDropDowns(fontsArray, unavailableFontFaces));
}

function createDropDowns(fonts, unavailableFonts)
{
	var dropDowns = "";
	var fontsList = "";
	var unavailableFaceToken = "<UNAVAILABLE_FACE>";
	var dropDownIdToken = "<ID>";
	var key;
	
	var menu =
	[
		'<vbox>',
			'<label value="Replace ' + unavailableFaceToken + ' by:"/>',
			'<menulist id="' + dropDownIdToken + '" width="' + panelWidth + '">',
				'<menupopup>',
					'<menuitem/>',
				'</menupopup>',
			'</menulist>',
		'</vbox>',
		'<spacer/>'
	];
	
	fonts.forEach(function(item, index)
	{
		var label = '"' + item.split(" ")[0].replace("<", "") + '"';		
		fontsList += '<menuitem label=' + label + '/>\n';
	});

	for (key in unavailableFonts)
	{
		dropDowns += menu
			.join("\n")
			.replace(unavailableFaceToken, key)
			.replace('<menuitem/>', fontsList)
			.replace(dropDownIdToken, key);
	}
	
	return dropDowns;
}

function scanDocument(foundElementCallback)
{
	var index;
	
	scanLibrary(dom.library.items, foundElementCallback);
	
	for (index in dom.timelines)
		scanTimeline(dom.timelines[index], foundElementCallback);
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

function checkIfInstalled(element, callback)
{
	if (element.elementType === "text")
	{
		var fontFace = element.getTextAttr("face");
		
		if (!fl.isFontInstalled(fontFace))
			callback(fontFace);
	}
}

function getUnavailableFontFace(element)
{
	checkIfInstalled(element, function(fontFace)
	{
		unavailableFontFaces[fontFace] = "unavailable";
		textFieldsFound++;
	});
}

function replaceUnavailableFontFace(element)
{
	checkIfInstalled(element, function(fontFace)
	{
		element.setTextAttr("face", panel[fontFace]);
		textFieldsReplaced++;
	});
}

main();
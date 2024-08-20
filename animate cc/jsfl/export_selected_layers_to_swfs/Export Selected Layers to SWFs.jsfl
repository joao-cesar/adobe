var dom, folder, originalProfile;
var zeros = 3;

function main()
{	
	dom = fl.getDocumentDOM();
	
	if (!dom)
	{
		alert("Please open up a document first.");
		return;	
	}
	
	folder = fl.browseForFolderURL("Choose an output directory.");
	
	if (!folder)
		return;
	
	originalProfile = dom.exportPublishProfileString();
	changeProfile();
	setLayers();
	dom.importPublishProfileString(originalProfile);
}

function changeProfile()
{
	var invisibleTag = getProfileValue(originalProfile, "InvisibleLayer");
	var newInvisibleTag = invisibleTag.replace(/\d+/g, "0");
	var newProfile = originalProfile.replace(invisibleTag, newInvisibleTag);
	
	dom.importPublishProfileString(newProfile);
}

function setLayers()
{
	var timeline = dom.getTimeline();
	var layers = timeline.layers;
	var layersIndexes = timeline.getSelectedLayers();
	var total = layersIndexes.length;
	var i, layer;
	
	for (i = 0; i < total; i++)
	{
		layer = layers[layersIndexes[i]];
		layer.originalVisibility = layer.visible;
		layer.visible = false;
	}
	
	for (i = 0; i < total; i++)
	{
		layer = layers[layersIndexes[i]];
		layer.visible = true;
		dom.exportSWF(folder + "/" + zeropad(i, zeros) + "_" + layer.name + ".swf", true);
		layer.visible = false;
	}

	for (i = 0; i < total; i++)
	{
		layer = layers[layersIndexes[i]];
		layer.visible = layer.originalVisibility;
	}
}

function getProfileValue(profileString, tagName)
{
	var re = new RegExp("<" + tagName + ">(.*)<\/" + tagName + ">");
	var match = profileString.match(re);
	
	if (match)
		return match[0];
	
	return null;
}

function zeropad(number, length) {
   
    var str = "" + number;
	
    while (str.length < length)
		str = "0" + str;
   
    return str;
}

main();
var dom = fl.getDocumentDOM();
var timeline = dom.getTimeline();
var layers = timeline.layers;
var baseLayer = 0; // change this number if the first layer is a folder or other type that possibly doesn't have frames
var frames = layers[baseLayer].frames;
var filePrefix = dom.name.replace(".fla", "") + "_"; // the prefix doesn't need to contain the FLA name
var digits = 2; // 01, 001, 0002...
var folder;

function main()
{	
	if (!dom)
	{
		alert("Please open up a FLA first.");
		return;
	}
	
	folder = fl.browseForFolderURL("Choose an output directory.");

	if (!folder)
	{
		alert("No folder selected.");
		return;
	}

	var i;
	
	for (i = 0; i < frames.length; i++)
	{
		timeline.currentFrame = i;
		lookForKeyframes(i);
	}
}

function lookForKeyframes(frameIndex)
{
	var i, layer;
	
	for (i = 0; i < layers.length; i++)
	{
		layer = layers[i];
		
		if (layer.layerType === "folder")
			continue;
		
		var frame = layer.frames[frameIndex];
		
		if (!frame)
			continue;

		if (frame.startFrame == frameIndex && !frame.isEmpty)
		{
			dom.exportPNG(folder + "/" + filePrefix + zeropad((frameIndex + 1), digits) + ".png", true, true);
			break;
		}
	}
}

function zeropad(number, length)
{
    var str = '' + number;
	
    while (str.length < length)
		str = '0' + str;
   
    return str;
}

main();
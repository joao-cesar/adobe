var dom = fl.getDocumentDOM();
var lib = dom.library;
var timeline = dom.getTimeline();
var symbolName = "Circle";
var total = 16;
var minX = 0;
var maxX = dom.width;
var minY = 0;
var maxY = dom.height;
var minScale = 0.1;
var maxScale = 1;
var minRotation = 0;
var maxRotation = 360;
var minAlpha = 20;
var maxAlpha = 100;

function main()
{	
	if (!checkForErrors())
	{
		getUserInput();
		randomSpawn();
	}
}

function checkForErrors()
{
	var currentLayer = timeline.layers[timeline.currentLayer];
	var selectedFrames = timeline.getSelectedFrames();
	
	if (!dom)
	{
		alert("Please open up a FLA first.");
		return true;
	}

	if (currentLayer.layerType === "folder")
	{
		alert("The current layer is a folder.");
		return true;
	}

	if (currentLayer.locked)
	{
		alert("The current layer is locked.");
		return true;
	}

	if (selectedFrames.length === 0)
	{
		alert("There's no selected frame.");
		return true;
	}

	if (selectedFrames[2] > currentLayer.frames.length)
	{
		alert("Selected frame is null.");
		return true;
	}

	return false;
}

function getUserInput()
{
	var userInput, totalInput;
	var data = prompt("Please input the Symbol name and the number of instances. E.g.: 'Circle,32.' or 'anims/Player,10.'");
	
	if (data)
	{
		userInput = data.split(",");
		
		if (userInput.length > 1)
		{
			totalInput = parseInt(userInput[1]);
			symbolName = userInput[0];
			total = isNaN(totalInput) ? total : totalInput;	
		}
	}
}

function randomSpawn()
{
	var i, randomScale, randomRotation;
	
	for (i = 0; i < total; i++)
	{
		lib.addItemToDocument({ x: randomRange(minX, maxX), y: randomRange(minY, maxY) }, symbolName);
		randomScale = randomRange(minScale, maxScale);
		dom.transformSelection(randomScale, 0, 0, randomScale);
		dom.rotateSelection(randomRange(minRotation, maxRotation));
		dom.setInstanceAlpha(randomRange(minAlpha, maxAlpha));
	}
}

function randomRange(min, max)
{
	return min + Math.random() * (max - min);
}

fl.outputPanel.clear();
main();
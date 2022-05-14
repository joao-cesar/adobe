var dom = fl.getDocumentDOM();
var lib = dom.library;
var timeline = dom.getTimeline();

var minOffsetX = -50;
var maxOffsetX = 50;
var minOffsetY = -30;
var maxOffsetY = 30;

var minOffsetScale = 0.02;
var maxOffsetScale = 0.02;

var minOffsetRotation = 30;
var maxOffsetRotation = 80;

var minAlpha = 20;
var maxAlpha = 100;

function main()
{	
	if (!checkForErrors())
		randomize();
}

function checkForErrors()
{
	if (!dom)
	{
		alert("Please open up a FLA first.");
		return true;
	}

	if (dom.selection.length === 0)
	{
		alert("There's no instance selected.");
		return true;
	}

	return false;
}

function randomize()
{
	var selection = dom.selection;
	var total = selection.length;
	var element;
	
	dom.selectNone();
	
	for (i = 0; i < total; i++)
	{
		element = selection[i];
		element.selected = true;
		element.x += randomRange(minOffsetX, maxOffsetX);
		element.y += randomRange(minOffsetY, maxOffsetY);
		element.rotation += randomRange(minOffsetRotation, maxOffsetRotation);
		element.scaleX += randomRange(minOffsetScale, maxOffsetScale);
		element.scaleY = element.scaleX;
		dom.setInstanceAlpha(randomRange(minAlpha, maxAlpha));
		dom.selectNone();
	}

	for (i = 0; i < total; i++)
	{
		element = selection[i];
		element.selected = true;
	}
}

function randomRange(min, max)
{
	return min + Math.random() * (max - min);
}

fl.outputPanel.clear();
main();
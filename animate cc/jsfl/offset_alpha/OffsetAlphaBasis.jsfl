var dom, selection;
var filePreffix = "OffsetAlphaBy";

function main(fileName)
{
	var offset;
	
	dom = fl.getDocumentDOM();
	
	if (!dom)
	{
		alert("Please open up a FLA first.");
		return;
	}
	
	selection = dom.selection;
	
	if (selection.length === 0 || selection[0].instanceType !== "symbol")
	{
		alert("Please select a symbol instance first.");
		return;
	}
	
	offset = parseInt(fileName.replace(filePreffix, ""));
	
	if (isNaN(offset))
	{
		alert("Offset is not a valid number.");
		return;
	}
	
	dom.setInstanceAlpha(clamp(0, selection[0].colorAlphaPercent + offset, 100));	
}

function clamp(min, value, max)
{
	if (value < min)
		return min;
	
	if (value > max)
		return max;
	
	return value
}
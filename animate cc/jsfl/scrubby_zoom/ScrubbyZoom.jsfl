var step;

function configureTool()
{ 
	theTool = fl.tools.activeTool;
	theTool.setToolName("scrubbyZoom");
	theTool.setIcon("ScrubbyZoom.png");
	theTool.setMenuString("Scrubby Zoom Tool");
	theTool.setToolTip("Scrubby Zoom Tool");
	theTool.setOptionsFile("ScrubbyZoom.xml");
}

function notifySettingsChanged()
{
	theTool =  fl.tools.activeTool;
	step =  theTool.step;
}

function setCursor()
{
	fl.tools.setCursor(1);
}

function activate()
{		
}

function deactivate()
{
}

function mouseDown()
{

}

function mouseUp()
{

}

function mouseMove(mouseLoc)
{	
	if (fl.tools.mouseIsDown)
	{
		var ptX = mouseLoc.x;
		var ptY = mouseLoc.y;

		fl.trace(ptX + ", " + ptY);
	}	
}
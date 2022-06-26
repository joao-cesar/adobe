var fontsFileName = "fontinfo.txt";
var xmlUIFile = "change_font_face.xml";
var placeholderElement = "<menuitem/>";
var dom;
var selection;
var fontsPath;
var fontsFile;
var fontsArray = [];
var xml;
var xmlString;
var currentFolder;	
var panel;

function start()
{
	fl.outputPanel.clear();
	
	dom = fl.getDocumentDOM();
	
	if (warn(!dom, "You need to have a document open first."))
		return;
	
	if (warn(!dom.pathURI, "Please save your document first."))
		return;
	
	selection = dom.selection;
	
	if (warn(selection.length === 0, "Please select a text field instance first."))
		return;
	
	fontsPath = FLfile.platformPathToURI(fl.configDirectory + fontsFileName);
	
	if (warn(!fontsPath, "Fonts file not found in your system."))
		return;
	
	fontsFile = FLfile.read(fontsPath);
	
	if (warn(!fontsFile, "Error on reading the fonts file."))
		return;
	
	fontsArray = fontsFile.split("\n");
	xml = fl.scriptURI.replace(fl.scriptURI.split("/").pop(), "") + xmlUIFile;
	xmlString = FLfile.read(xml);
	panel = fl.xmlPanelFromString(xmlString.replace(placeholderElement, createList(fontsArray)));

	if (panel.dismiss == "cancel")
		return;			
	else
		dom.setElementTextAttr("face", panel.faces);
}

function warn(check, message)
{
	if (check)
	{
		alert(message);
		return true;
	}
	
	return false;
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

start();
var dom, dialog;

function main()
{	
	var ui =
	[
		"<dialog title='Replace Text in Multiple FLAs' buttons='accept, cancel'>",
			"<hbox>",
				"<label value='Find:'/>",
				"<textbox id='find' value='' width='200'/>",
			"</hbox>",
			"<hbox>",
				"<label value='Replace:'/>",
				"<textbox id='replace' value='' width='200'/>",
			"</hbox>",
			"<checkbox id='matchCase' label='Match case' align='left' checked='false'/>",
			"<checkbox id='wholeWord' label='Whole word' align='left' checked='false'/>",
			"<checkbox id='close' label='Close FLAs' align='left' checked='true'/>",
			"<checkbox id='promptToClose' label='Prompt to close if needed' align='left' checked='false'/>",
			"<checkbox id='logResults' label='Log results' align='left' checked='true'/>",
			"<checkbox id='save' label='Save' align='left' checked='true'/>",
			"<spacer/>",
		"</dialog>"
	];

	dialog = fl.xmlPanelFromString(ui.join(""));
		
	if (dialog.dismiss === "accept" && dialog.find !== "")
		openFiles();
}

function openFiles()
{
	var uri = fl.browseForFolderURL("select", "Select the folder containing the FLAs.");		
	var files = FLfile.listFolder(uri + "/*.fla", "Files.");
	
	if (files.length === 0)
		return;
	
	try
	{
		var i;
		
		for (i = 0, total = files.length; i < total; i++)
		{
			fl.openDocument(uri + "/" + files[i]);
			dom = fl.getDocumentDOM();
			findAndReplace();
			
			if (dialog.save === "true")
				dom.save();
						
			if (dialog.close === "true")
				dom.close(dialog.promptToClose === "true");
		}
	}
	catch(error)
	{
		if (dialog.logResults === "true")
		{
			fl.trace(files[i]);
			fl.trace(error);
			fl.trace("___________");
		}
	}
}

function findAndReplace()
{
	var results = fl.findObjectInDocByType("text", dom);
	var total = results.length;

	if (total > 0)
	{
		var pattern = dialog.wholeWord === "true" ? "\\b" + dialog.find + "\\b" : dialog.find;
		var modifiers = dialog.matchCase === "true" ? "g" : "ig";
		var regEx = new RegExp(pattern, modifiers);
		var i, obj;
		
		for (i = 0; i < total; i++)
		{
			obj = results[i].obj;
			obj.setTextString(obj.getTextString().replace(regEx, dialog.replace));
		}

		if (dialog.logResults === "true")
		{
			fl.trace(dom.name + ": Found " + total + " text field(s).");
			fl.trace("");
		}
	}
	else
	{
		if (dialog.logResults === "true")
			fl.trace("Failed to find text field(s) in " + dom.name + ".");
	}
}

main();
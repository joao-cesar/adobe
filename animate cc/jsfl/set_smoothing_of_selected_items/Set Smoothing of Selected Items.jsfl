var dom = fl.getDocumentDOM();
var lib = dom.library;
var selectedItems = lib.getSelectedItems();

function main()
{	
	if (!dom)
	{
		alert("Please open a FLA first.");
			return;
	}

	if (selectedItems.length === 0)
		return;
	
	var uiList =
	[
		"<dialog title='Set Smoothing of Selected Items' buttons='accept, cancel'>",
			"<script>" + setItems.toString() + "</script>",
			"<radiogroup id='allow'>",
				"<radio label='True' value='true'/>",
				"<radio label='False' value='false'/>",
			"</radiogroup>",
			"<spacer/>",
		"</dialog>"
	];

	var dialog = fl.xmlPanelFromString(uiList.join(""));

	if (dialog.dismiss === "accept")
		setItems();
}

function setItems()
{	
	var dom = fl.getDocumentDOM();
	var lib = dom.library;
	var selectedItems = lib.getSelectedItems();
	
	if (selectedItems.length === 0)
		return;
	
	var xmlUi = fl.xmlui;
	var allow = xmlUi.get("allow") === 'true';
		
	selectedItems.forEach(function(item)
	{
		if (item.allowSmoothing !== undefined)
			item.allowSmoothing = allow;
	});
}

main();
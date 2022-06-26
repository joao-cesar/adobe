var items = [];

function list()
{
	var array = [];
	
	fl.getDocumentDOM().library.items.forEach(function(item, index)
	{
		array[index] = item.name;
	});
	
	return array;
}

function edit(item)
{
	fl.getDocumentDOM().library.editItem(item);
}

function callMyPanel(panelName, arg) 
{	
    if (fl.swfPanels.length > 0)
	{ 
        for (i = 0; i < fl.swfPanels.length; i++)
		{ 
			if (fl.swfPanels[i].name == panelName)
			{
				fl.swfPanels[i].call("callSWF", arg); 
				break; 
			} 
        } 
    } 
    else 
        fl.trace("no panels"); 
}

items = list();
callMyPanel("List Library Items", items.join(","));
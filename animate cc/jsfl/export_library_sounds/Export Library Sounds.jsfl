function exportLibrarySoundsToFiles()
{
    var doc = fl.getDocumentDOM();
    if (!doc)
    {
        alert("Open up a FLA first");
        return;
    }
    
    var selectedItems = doc.library.getSelectedItems();
    if (!selectedItems || selectedItems.length === 0)
    {
        alert("Please select at least one Library sound.");
        return;
    }
    
    var folder = fl.browseForFolderURL("Choose an output directory.");
    if (!folder)
        return;

    for (var i = 0, total = selectedItems.length; i < total; i++)
    {
        var selectedItem = selectedItems[i];
        
        if (selectedItem.itemType === "sound")
        {
            var destination;
            var extensions = [".aif", ".aiff", ".aifc", ".wav", ".mp3", ".asnd", ".au", ".snd", ".sd2", ".ogg", ".oga", ".flac"];
            var extension = selectedItem.name.substr(-4);
            
            if (extensions.indexOf(extension) > -1)
                destination = folder + "/" + selectedItem.name;
            else
                destination = folder + "/" + selectedItem.name.split("/").pop() + ".wav";
            
            selectedItem.exportToFile(destination);            
        }
        else
            fl.trace(selectedItem + " is not a sound.");
    }
}

exportLibrarySoundsToFiles();

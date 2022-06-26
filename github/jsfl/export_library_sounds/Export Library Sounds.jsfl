﻿function exportLibrarySoundsToFiles()
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
                destination = folder + "/" + selectedItem.name.split("/").pop();
            else
                destination = folder + "/" + selectedItem.name.split("/").pop() + ".wav";

            var logMessage = selectedItem.name + " (type=" + selectedItem.originalCompressionType + ")";
            
            if (selectedItem.exportToFile(destination))
                logMessage += " -> OK";
            else
            {
                logMessage += " -> WAV export failed. Retrying " + selectedItem.name + " as MP3";
                destination = folder + "/" + selectedItem.name.split("/").pop() + ".mp3";
                if (selectedItem.exportToFile(destination))
                    logMessage += " -> OK";
                else
                    logMessage += " -> failed";
            }
            
            fl.trace(logMessage);
        }
        else if (selectedItem.itemType !== "folder")
            fl.trace(selectedItem + " is not a sound.");
    }
}

exportLibrarySoundsToFiles();

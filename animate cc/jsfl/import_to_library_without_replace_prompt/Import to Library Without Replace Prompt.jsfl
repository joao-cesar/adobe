var imageName = "pexels-darina-belonogova-9160592.jpg";
var tempFolderNamePrefix = "temp_";
var dom, lib, imageExists;
var imageURL; // in this example, the image is in the same folder where this script is located

function main()
{
	dom = fl.getDocumentDOM();
	
	if (!dom)
	{
		alert("Please open up a FLA first.");
		return;
	}

	imageURL = fl.scriptURI.replace(fl.scriptURI.split("/").pop(), "") + imageName;

	if (!fl.fileExists(imageURL))
	{
		alert("The image URL is wrong or the image doesn't exist.");
		return;
	}

	lib = dom.library;
	imageExists = lib.itemExists(imageName)

	if (imageExists)
	{
		var tempFolderName = tempFolderNamePrefix + Date.now();
		lib.newFolder(tempFolderName);
		lib.moveToFolder(tempFolderName, imageName, true);
	}

	dom.importFile(imageURL, true, false, false);

	if (imageExists)
	{
		lib.moveToFolder("", tempFolderName + "/" + imageName, true);
		lib.deleteItem(tempFolderName);
	}
}

main();
var scriptURI = fl.scriptURI;
var fileName = scriptURI.split("/").pop();
var baseScriptPath = scriptURI.replace(fileName, "") + "OffsetAlphaBasis.jsfl";

fl.runScript(baseScriptPath, "main", fileName);
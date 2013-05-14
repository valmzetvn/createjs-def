
var req = new XMLHttpRequest();
req.onreadystatechange = function(result, b) {
	if (req.readyState != 4) return;
	
	var jsp = require("../lib/parse-js");
	var ast = jsp.parse(req.responseText);

	var builder = require("../lib/model");
	var model = builder.parse(ast[1]);
	console.info(model);
}
req.open("GET", "bilbo-walkcycle-side.js", false);
req.send();

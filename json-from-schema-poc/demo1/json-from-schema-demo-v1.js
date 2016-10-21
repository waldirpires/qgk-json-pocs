var jfs = require('json-from-schema');
var fs = require('fs');

var schemaFileName = "BusinessInteraction.json";

fileData = fs.readFileSync(schemaFileName,'utf8');
schema = JSON.parse(fileData);
console.log("Parsed " + schemaFileName);
$RefParser.dereference(schema, function(err, schema) {
  if (err) {      console.error(err);    }
  else {
    console.log("Success: JSON schema dereferenced - " + JSON.stringify(schema).length + " chars");
    console.log("Processing file: " + templateFileName);
	
    var gen = new jfs.JsonFromSchema([schema])
    var sampleDerp = gen.generate('BusinessInteraction.json'); 
	console.log(sampleDerp);	
  }
});  

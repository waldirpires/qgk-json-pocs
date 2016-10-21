var jfs = require('json-from-schema');
var fs = require('fs');
$RefParser = require('json-schema-ref-parser');

var schemaFileName = process.argv[2];

fileData = fs.readFileSync(schemaFileName,'utf8');
schema = JSON.parse(fileData);
console.log("Parsed " + schemaFileName);
$RefParser.dereference(schema, function(err, schema) {
  if (err) {      console.error(err);    }
  else {
    console.log("Success: JSON schema dereferenced - " + JSON.stringify(schema).length + " chars");
	
    var gen = new jfs.JsonFromSchema([schema])
    var sampleDerp = gen.generate(schemaFileName); 
	console.log(sampleDerp);	
  }
});  

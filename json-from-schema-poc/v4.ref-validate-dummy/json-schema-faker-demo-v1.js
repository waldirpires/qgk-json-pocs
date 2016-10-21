var jsf = require('json-schema-faker');
var fs = require('fs');

$RefParser = require('json-schema-ref-parser');

//var templateFileName = process.argv[2];
var schemaFileName = process.argv[2];

var schema = getSchemaFromFile(schemaFileName)
//var template = fs.readFileSync(templateFileName,'utf8');

$RefParser.dereference(schema, function(err, schema) {
  if (err) {      console.error(err);    }
  else {
    console.log("Success: JSON schema dereferenced - " + JSON.stringify(schema).length + " chars");
    //console.log("Processing file: " + templateFileName);
    //fileData = fs.readFileSync(templateFileName,'utf8');

	fakeJsonSchema(schema.properties);	
  }
});   

function fakeJsonSchema(template){  
	var sample = jsf(template);
	console.log(sample);
	console.log(sample.biItems);
}  
 
function getSchemaFromFile(fileName){
  var fileData = fs.readFileSync(fileName,'utf8');
  var schema = JSON.parse(fileData);
  return schema
}
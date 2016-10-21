var jsf = require('json-schema-faker');
var fs = require('fs');

$RefParser = require('json-schema-ref-parser');

var schema = {
    "properties": {
        "description": {
            "type": "string",
            "description": "A description of this Business Interaction"
        },
        "createdBy": {
            "type": "string",
            "system-generated": true,
            "description": "The user who created this Business Interaction"
        },
        "createdDate": {
            "type": "string",
            "system-generated": true,
            "format": "date-time",
            "description": "The date when this Business Interaction was created"
        },
        "updatedBy": {
            "type": "string",
            "system-generated": true,
            "description": "The user who last updated this Business Interaction"
        },
        "lastUpdatedDate": {
            "type": "string",
            "system-generated": true,
            "format": "date-time",
            "description": "The date when this Business Interaction was last updated"
        },
        "interactionDate": {
            "type": "string",
            "system-generated": true,
            "format": "date-time",
            "description": "The date when this Business Interaction was executed (submitted for execution)"
        },
        "interactionDateComplete": {
            "type": "string",
            "system-generated": true,
            "format": "date-time",
            "description": "The date when this Business Interaction was completed"
        }
    }
};
//var template = fs.readFileSync(templateFileName,'utf8');

$RefParser.dereference(schema, function(err, schema) {
  if (err) {      console.error(err);    }
  else {
    console.log("Success: JSON schema dereferenced - " + JSON.stringify(schema).length + " chars");
	console.log("=======================================================");
	console.log(JSON.stringify(schema));
	console.log("=======================================================");
    //console.log("Processing file: " + templateFileName);
    //fileData = fs.readFileSync(templateFileName,'utf8');

	fakeJsonSchema(schema.properties);	
  }
});   

function fakeJsonSchema(template){  
  console.log("Faking JSON Schema . . .");
  var sample = jsf(template);
  console.log(sample);
}  
 
function getSchemaFromFile(fileName){
  var fileData = fs.readFileSync(fileName,'utf8');
  var schema = JSON.parse(fileData);
  return schema
}
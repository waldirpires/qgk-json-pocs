var dummyjson = require('dummy-json');
var fs = require('fs');
var sys = require('sys'),
$RefParser = require('json-schema-ref-parser');
//var Validator = require('jsonschema').Validator;
var validate = require('schema-validator');

console.log();
process.argv.forEach((val, index) => {
  console.log(`${index}: ${val}`);
});

if (process.argv.length != 4){
  console.log();
  console.log("usage: node poc-server-v4.js <templateFileName> <schemaFileName>");
  console.log();
  console.log("       <templateFileName>: name of the dummy JSON template file to be used");
  console.log("       <schemaFileName>  : name of the JSON schema file name to be used for validation");
  process.exit(1);
}

var templateFileName = process.argv[2];
var schemaFileName = process.argv[3];

var myHelpers = {
  gender: function() {
	return dummyjson.utils.randomArrayItem(
	  ['male', 'female']);
  },
  maritalStatus: function() {
	return dummyjson.utils.randomArrayItem(
	  ['Married', 'Single', 'Divorced']);
  },
  formOfAddress: function() {
	return dummyjson.utils.randomArrayItem(
	  ['Mr', 'Ms', 'Mrs']);
  },
  languages: function() {
	return dummyjson.utils.randomArrayItem(
	  ['EN', 'FR', 'CH']);
  },
  fullName: function(options) {
    return dummyjson.helpers.firstName(options) + ' ' 
	  + dummyjson.helpers.lastName(options);
  }  
};

// read template file
// read schema file, dereference it
var fileData = '';
var schema; 
var templateFile = '';
var dummyJson = '';

var generateDummyJson = function (templateFile, myHelpers) {
    dummyJson = dummyjson.parse(templateFile, {helpers: myHelpers}); 
    log('RESULT', dummyJson);
  };

console.log("Processing file: " + schemaFileName);

fileData = fs.readFileSync(schemaFileName,'utf8');
schema = JSON.parse(fileData);
console.log("Parsed " + schemaFileName);
$RefParser.dereference(schema, function(err, schema) {
  if (err) {      console.error(err);    }
  else {
    console.log("Success: JSON schema dereferenced - " + JSON.stringify(schema).length + " chars");
    console.log("Processing file: " + templateFileName);
    fileData = fs.readFileSync(templateFileName,'utf8');
    generateDummyJson(fileData, myHelpers);

// validate dummy generated json message against a schema
//var v = new Validator();
//console.log(v.validate(templateFile, schema));
	
	validateTemplate(dummyJson, schema);
  }
});  

console.log("Processing file: " + templateFileName);
fileData = fs.readFileSync(templateFileName,'utf8');


generateDummyJson(fileData, myHelpers);

// validate dummy generated json message against a schema
//var v = new Validator();
//console.log(v.validate(templateFile, schema));

function validateTemplate(template, schema){
  console.log("Validating template " + templateFileName + " against schema " + schemaFileName + " . . .");
  //var validation = validate(templateFile, schema);
  var validator = new validate.Validator(schema);
  var check = validator.check(template);
  console.log("Validation: " + check);
}

function log(title, msg){
    console.log('==================================================');
    console.log(title+': ' + msg.length);
    console.log(msg);
    console.log('==================================================');
	console.log('.');
}   
   
function doDereferenceSchema(){
    $RefParser.dereference(schema, function(err, schema) {
      if (err) {      console.error(err);    }
      else {
        console.log("Success: JSON schema dereferenced - " + JSON.stringify(schema).length + " chars");	    
      }
  });  
}

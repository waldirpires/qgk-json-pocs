// json-schema-faker-demo-v4.js

// 1) Reads the JSON schema file
// 2) Parses the data read from schema file
// 3) Dereferences the parsed schema obj
// 4) Saves dereferenced schema obj to file
// 5) Creates a dummy JSON message based on the JSON schema file

fs = require('fs');
var jsf = require('json-schema-faker');
var $RefParser = require('json-schema-ref-parser');

var schemaFile = process.argv[2];

var fileData = '';

console.log("Processing file: " + schemaFile);

logStep("1: Loading schema file . . .");
fs.readFile(schemaFile, 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  fileData = data.toString();
  console.log("Read " + fileData.length);
  //console.log(data);
  logStep("2: Parsing schema data read from file");
  var schema = JSON.parse(fileData);
  $RefParser.dereference(schema, function(err, schema) {
    if (err) {      console.error(err);    }
    else {
	  logStep("3: Dereferencing schema file "+schemaFile+" . . .");
	  var out = JSON.stringify(schema);
	  var outFileName = 'schema-dereferenced.json';
	  fs.writeFileSync(outFileName, out);
	  fs.stat(outFileName, (err, stats) => {
		if (err) throw err;
		console.log(`stats: ` + stats.size + " Bytes");
		// ${JSON.stringify(stats)}
	  });	  
	  console.log(out);
	  logStep("4: Generating dummy JSON from Schema . . .");
	  fakeJsonSchema(schemaFile, schema.properties);
    }
  });  
});

function fakeJsonSchema(schemaFile, template){  
  console.log("Faking JSON Schema . . .");
  var sample = jsf(template);
  var sampleStr = JSON.stringify(sample);
  console.log(sampleStr, null, 4);
  writeToFile(Date.now()+"-"+schemaFile+"-sample.json", sampleStr);   
}  

function logStep(step){
  console.log("========================================================");
  console.log(step);
  console.log("========================================================");
}

function writeToFile(fileName, fileData){
  fs.writeFileSync(fileName, fileData);   
}
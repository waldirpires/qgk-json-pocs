var jsf = require('json-schema-faker');
fs = require('fs');

//https://nodejs.org/docs/latest/api/process.html#process_process_argv
//https://docs.nodejitsu.com/
var templateFile = process.argv[2];

var refs = [
  {
    id: 'otherSchema',
    type: 'string'
  }
];

var fileData = '';

console.log("Processign file: " + templateFile);

fs.readFile(templateFile, 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  fileData = data.toString();
  console.log("Read " + fileData.length);
  //console.log(data);
  var schema = JSON.parse(fileData);
  executeJsonFaker(schema);
});



console.log("DONE!");

function executeJsonFaker(schema){
  var sample = jsf(schema);
  console.log("Using JSON Schema Faker (JSF) " + jsf.version); 
  console.log(sample);
}


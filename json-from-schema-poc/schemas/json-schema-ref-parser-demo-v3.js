var http = require('http');
var dummyjson = require('dummy-json');
fs = require('fs');
var $RefParser = require('json-schema-ref-parser');

var templateFile = process.argv[2];

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
  $RefParser.dereference(schema, function(err, schema) {
    if (err) {
      console.error(err);
    }
    else {
      console.log(JSON.stringify(schema));
    }
  });  
});


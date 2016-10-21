fs = require('fs');
var $RefParser = require('json-schema-ref-parser');

var templateFile = process.argv[2];

var fileData = '';

console.log("Processing file: " + templateFile);

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
	  var out = JSON.stringify(schema);
	  var outFileName = 'schema-dereferenced.json';
	  fs.writeFileSync(outFileName, out);
	  fs.stat(outFileName, (err, stats) => {
		if (err) throw err;
		console.log(`stats: ` + stats.size + " Bytes");
		// ${JSON.stringify(stats)}
	  });	  
	  console.log(out);
    }
  });  
});


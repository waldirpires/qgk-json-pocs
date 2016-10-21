// Require Sys and FileSystem
var sys = require('sys'), fs = require('fs');

// Require package
var validate = require('json-schema').validate;

// Load a schema by which to validate
fs.readFile('schema.json',function(err,data) {
	if(err) throw err;
	var schema = data;
	// Load data file
	fs.readFile('./users.json',function(err,data) {
		if(err) throw err;
		// Parse as JSON
		var posts = JSON.parse(data);
		// Validate
		var validation = validate(posts, schema);
		// Echo to command line
		sys.puts('The result of the validation:  ',validation.valid);
	});
});
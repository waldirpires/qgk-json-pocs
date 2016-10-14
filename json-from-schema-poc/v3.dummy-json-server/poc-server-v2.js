var http = require('http');
var dummyjson = require('dummy-json');

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

// Create a server
http.createServer( function (request, response) {  
  var headers = request.headers;
  var method = request.method;
  var url = request.url;  
  console.log("Received request . . . ");
  var body = "";
  var resp = "";
  response.setHeader('Content-Type', 'application/json');
  request.on('error', function(err) {
    response.statusCode = 404;	
    console.error(err);
  }).on('data', function (chunk) {
    body += chunk;
  }).on('end', function () {
	log('BODY', body);
	response.statusCode = 200;	
    resp = dummyjson.parse(body, {helpers: myHelpers}); 
    log('RESULT', resp);
    response.end(resp);   
  })
}).listen(8081);

function log(title, msg){
    console.log('==================================================');
    console.log(title+': ' + msg.length);
    console.log(msg);
    console.log('==================================================');
	console.log('.');
}   
   
// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');


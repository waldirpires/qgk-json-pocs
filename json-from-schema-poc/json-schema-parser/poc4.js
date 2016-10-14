console.log("Loading JSON Schema . . . ");
var json = require("./spec/UpdateCustomerBI-1.0.0.json");

console.log("Loading JSON Schema parser . . . ");
var parser = require("json-schema-parser");
 
console.log("Parsing JSON Schema"); 
var schema = parser.parse(json);
eval(schema); 
console.log(JSON.stringify(schema)); 

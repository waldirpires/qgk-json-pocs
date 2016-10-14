var dummyjson = require('dummy-json');

var myHelpers = {
  direction: function() {
    // Use dummyjson random to ensure the seeded random number generator is used 
    return dummyjson.utils.random() > 0.5 ? 'male' : 'female';
  }
};
var template = '{{direction}}';
var result = dummyjson.parse(template, {helpers: myHelpers});
console.log(result);
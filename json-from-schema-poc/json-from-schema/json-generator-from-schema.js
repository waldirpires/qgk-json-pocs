var jfs = require('json-from-schema');

console.log('Loading JSON Message from Schema . . .');

var schema1 = {
  id: 'http://www.example.com/herp#'
  , type: "object"
  , properties: {
    someString: {type: 'string', pattern: 'bl(a){1,10}h'}
    , someInt: {type: 'integer', minimum: 23, maximum: 42}
    , someEnum: {$ref: '#/definitions/blaEnum'}
    , someEnumArray: {type: 'array', items: {$ref: '#/definitions/blaEnum'}, minItems: 5, maxItems: 8}
    , someObject: {
      type: 'object'
      , properties: {
        derp: {type: 'string', minLength:1, maxLength:5}
        , herp: {type: 'string', minLength:5, maxLength:10}
      }
 
      , patternProperties: {
        'pat-\\d+': {type: 'string', pattern: 'patStr-\\w{1,20}'}
      }
 
      , additionalProperties: true
      , required: ['derp']
    }
  }
 
  , additionalProperties: false
  , required: ['someString', 'someObject']
  , definitions: {
    blaEnum: {enum: ['bla', 'dohoi', 666]}
  }
};
 
console.log(typeof schema1); 
 
var schema2 = {
  id: 'http://www.example.com/derp#'
  , type: "object"
  , properties: {
    herps: {type: "array", items: {$ref: 'http://www.example.com/herp'}}
  }
};
 
console.log(typeof schema2);  

var gen = new jfs.JsonFromSchema([schema1, schema2])
var sampleDerp = gen.generate('http://www.example.com/derp'); // note: no hash at the end 
console.log(sampleDerp); 
var sampleHerp = gen.generate('http://www.example.com/herp');
console.log(sampleHerp); 
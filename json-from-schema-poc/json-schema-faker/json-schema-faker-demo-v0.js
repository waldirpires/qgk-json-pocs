var jsf = require('json-schema-faker');
 
var schema = {
  type: 'object',
  properties: {
    user: {
      type: 'object',
      properties: {
        id: {
          $ref: '#/definitions/positiveInt'
        },
        name: {
          type: 'string',
          faker: 'name.findName'
        },
        email: {
          type: 'string',
          format: 'email',
          faker: 'internet.email'
        }
      },
      required: ['id', 'name', 'email']
    }
  },
  required: ['user'],
  definitions: {
    positiveInt: {
      type: 'integer',
      minimum: 0,
      exclusiveMinimum: true
    }
  }
};

process.argv.forEach((val, index) => {
  console.log(`${index}: ${val}`);
});
 
var sample = jsf(schema);
console.log("Using JSON Schema Faker (JSF) " + jsf.version); 
console.log(sample);
// "[object Object]" 
 
console.log(sample.user.name);
var jfs = require('json-from-schema');

console.log('Loading JSON Message from Schema . . .');

var schema3 = {
  id: 'http://www.example.com/herp#',
  type: "object"
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

var schema1 = {
    id: "UpdateCustomerBI-1.0.0.spec#",
    title: "UpdateCustomerBI-1.0.0",
    description: "This Business Interaction represents a request to update a customer.",
    allOf: [
        {
            $ref: "BusinessInteraction.json#"
        },
        {
            properties: {
                interactionType: {
                    type: "string",
                    enum: [
                        "Request"
                    ]
                },
                biSpecificationRef: {
                    type: "string",
                    format: "uri",
                    description: "Reference to the specification(schema) on which this Business Interaction instance is based on. It must be expressed as URI.",
                    enum: [
                        "/cpi/schemas/UpdateCustomerBI-1.0.0.spec"
                    ]
                },
                biItems: {
                    type: "array",
                    minItems: 1,
                    maxItems: 1,
                    description: "The array of Customer Business Interaction Item for this Customer Update",
                    items: {
                        "$ref": "UpdateCustomerBIItem-1.0.0.spec#"
                    }
                },
                relatedPartyInteractionRoles: {
                    type: "array",
                    uniqueItems: true,
                    minItems: 1,
                    maxItems: 1,
                    description: "An array of Party Interaction Roles which associates a single Customer with this Update Customer Business Interaction.",
                    items: {
                        "$ref": "#/definitions/CustomerInteractionRole"
                    }
                }
            },
            required: [
                "relatedPartyInteractionRoles",
                "biItems"
            ]
        }
    ],
    definitions: {
        CustomerInteractionRole: {
            allOf: [
                {
                    $ref: "EntityAssociation.json#"
                },
                {
                    properties: {
                        entitySpecificationRef: {
                            type: "string",
                            format: "uri",
                            description: "Reference to the specification(schema) describing the entity referred to by entityRef. It must be expressed as URI.",
                            enum: [
                                "/cpi/schemas/Customer.json"
                            ]
                        }
                    },
                    entityRef:{
                        type: "string",
                        format: "uri",
                        description: "Reference to the entity related to the given entity.",
                        pattern: "(\/cpi\/holisticView\/v\\d+\/customer\/)(\\w+)"
                    }
                }
            ]
        }
    }
};
 
//try { 
//var schema1 = JSON.parse(schema1Str); 
//eval(schema1Str);
//}
//catch(err) {
//  console.log(err);
//}

console.log(typeof schema1);
 
var gen = new jfs.JsonFromSchema([schema3]);
//var sampleDerp = gen.generate('UpdateCustomerBI-1.0.0.spec'); // note: no hash at the end 
//console.log(sampleDerp); 
var sampleDerp = gen.generate('http://www.example.com/herp'); // note: no hash at the end 
console.log(sampleDerp); 

//var sampleHerp = gen.generate('UpdateCustomerBIItem-1.0.0.spec');
//console.log(sampleHerp); 
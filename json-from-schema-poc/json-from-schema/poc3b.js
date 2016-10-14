var jfs = require('json-from-schema');

console.log('Loading JSON Message from Schema . . .');

var schema4 = {
  id: 'UpdateCustomerBI-1.0.0.spec#',
  type: "object",
  $schema: "http://json-schema.org/draft-04/schema#",
  "allOf": [
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
                    enum: [
                        "/cpi/schemas/UpdateCustomerBI-1.0.0.spec"
                    ]
                },
                biItems: {
                    type: "array",
                    minItems: 1,
                    maxItems: 1,
                    items: {
						$schema: "http://json-schema.org/draft-04/schema#",
						id: "UpdateCustomerBIItem-1.0.0.spec",
						title: "UpdateCustomerBIItem-1.0.0",
						properties: {
							biItemSpecificationRef: {
								type: "string",
								format: "uri",
								enum: [									"/cpi/schemas/UpdateCustomerBIItem-1.0.0.spec" ]
							},
							action: {
								type: "string",
								enum: ["Update"]
							},
							involvedEntity: {
								type: "object",
								additionalProperties: false,
								properties: {
									entitySpecificationRef: {
										type: "string",
										format: "uri",
										enum: [
                                "#/definitions/CustomerUpdateInformation"
										]
									},
									entity: {
        CustomerUpdateInformation: {
            type: "object",
            additionalProperties: false,
            properties: {
                homeTimeZones: {
                    type: "array",
                    uniqueItems: true,
                    items: {
                        "$ref": "/spec/TimeZoneValue.json#"
                    }
                }
            },
            minProperties: 1
        }
									
									}
								}
							}
						},
						"required": [
							"involvedEntity"
						]
                    }
                } ,
                relatedPartyInteractionRoles: {
                    type: "array",
                    uniqueItems: true,
                    minItems: 1,
                    maxItems: 1,
                    items: {
						properties: {
							entitySpecificationRef: {
								type: "string",
								format: "uri",
								enum: [
                                "/cpi/schemas/Customer.json"
								]
							}
						},
						entityRef:{
							type: "string",
							format: "uri",
							pattern: "(\/cpi\/holisticView\/v\\d+\/customer\/)(\\w+)"
						}
                    }
                }
				
  
	},
            required: [
                "relatedPartyInteractionRoles",
                "biItems"
            ]
    }, 
	{

}]};

console.log(typeof schema1);
 
var gen = new jfs.JsonFromSchema([schema4]);
var sampleDerp = gen.generate('UpdateCustomerBI-1.0.0.spec'); // note: no hash at the end 
console.log(sampleDerp); 
//var sampleDerp = gen.generate('http://www.example.com/herp'); // note: no hash at the end 
//console.log(sampleDerp); 

//var sampleHerp = gen.generate('UpdateCustomerBIItem-1.0.0.spec');
//console.log(sampleHerp); 
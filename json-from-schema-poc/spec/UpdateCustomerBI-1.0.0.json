{
    "$schema": "http://json-schema.org/draft-04/schema#",
    "id": "UpdateCustomerBI-1.0.0.spec",
    "title": "UpdateCustomerBI-1.0.0",
    "description": "This Business Interaction represents a request to update a customer.",
    "allOf": [
        {
            "$ref": "BusinessInteraction.json#"
        },
        {
            "properties": {
                "interactionType": {
                    "type": "string",
                    "enum": [
                        "Request"
                    ]
                },
                "biSpecificationRef": {
                    "type": "string",
                    "format": "uri",
                    "description": "Reference to the specification(schema) on which this Business Interaction instance is based on. It must be expressed as URI.",
                    "enum": [
                        "/cpi/schemas/UpdateCustomerBI-1.0.0.spec"
                    ]
                },
                "biItems": {
                    "type": "array",
                    "minItems": 1,
                    "maxItems": 1,
                    "description": "The array of Customer Business Interaction Item for this Customer Update",
                    "items": {
                        "$ref": "UpdateCustomerBIItem-1.0.0.spec#"
                    }
                },
                "relatedPartyInteractionRoles": {
                    "type": "array",
                    "uniqueItems": true,
                    "minItems": 1,
                    "maxItems": 1,
                    "description": "An array of Party Interaction Roles which associates a single Customer with this Update Customer Business Interaction.",
                    "items": {
                        "$ref": "#/definitions/CustomerInteractionRole"
                    }
                }
            },
            "required": [
                "relatedPartyInteractionRoles",
                "biItems"
            ]
        }
    ],
    "definitions": {
        "CustomerInteractionRole": {
            "allOf": [
                {
                    "$ref": "EntityAssociation.json#"
                },
                {
                    "properties": {
                        "entitySpecificationRef": {
                            "type": "string",
                            "format": "uri",
                            "description": "Reference to the specification(schema) describing the entity referred to by entityRef. It must be expressed as URI.",
                            "enum": [
                                "/cpi/schemas/Customer.json"
                            ]
                        }
                    },
                    "entityRef":{
                        "type": "string",
                        "format": "uri",
                        "description": "Reference to the entity related to the given entity.",
                        "pattern": "(\/cpi\/holisticView\/v\\d+\/customer\/)(\\w+)"
                    }
                }
            ]
        }
    }
}
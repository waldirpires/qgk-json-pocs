{
    "$schema": "http://json-schema.org/draft-04/schema#",
    "id": "ManageCustomerContactMediumBI-1.0.0.spec",
    "title": "ManageCustomerContactMediumBI-1.0.0",
    "description": "This Business Interaction represents a request to manage a ContactMediumAssociation (and optionally its related ContactMedium) for a Customer.",
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
                        "/cpi/schemas/ManageCustomerContactMediumBI-1.0.0.spec"
                    ]
                },
                "biItems": {
                    "type": "array",
                    "minItems": 1,
                    "description": "The array of Contact Medium Association Business Interaction Item for this Contact Medium Association Business Interaction",
                    "items": {
                        "$ref": "ContactMediumAssociationBIItem-1.0.0.spec#"
                    }
                },
                "relatedPartyInteractionRoles": {
                    "type": "array",
                    "uniqueItems": true,
                    "minItems": 1,
                    "maxItems": 1,
                    "description": "An array of Party Interaction Roles which associates a single Customer with this Contact Medium Association management Business Interaction.",
                    "items": {
                        "$ref": "#/definitions/CustomerInteractionRole"
                    }
                }
            }
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
                    }
                }
            ]
        }
    }
}

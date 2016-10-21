{
    "$schema": "http://json-schema.org/draft-04/schema#",
    "id": "AcquireCustomerBI-1.0.0.spec",
    "title": "AcquireCustomerBI-1.0.0",
    "description": "This Business Interaction represents a request to Onboard a customer.",
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
                        "/cpi/schemas/AcquireCustomerBI-1.0.0.spec"
                    ]
                },
                "biItems": {
                    "type": "array",
                    "minItems": 1,
                    "description": "The array of Business Interaction Items for this Customer On Boarding. At least one, and only one item containing the Customer entity must be preset with the action: \"Add\".",
                    "items": {
                        "anyOf": [
                            {
                                "$ref": "#/definitions/CustomerBIItemWithAdd"
                            },
                            {
                                "$ref": "ContactMediumAssociationBIItem-1.0.0.spec#"
                            }
                        ]
                    }
                },
                "relatedPartyInteractionRoles": {
                    "type": "array",
                    "uniqueItems": true,
                    "minItems": 1,
                    "maxItems": 1,
                    "description": "An array of Party Interaction Roles which associates a single Party with this Acquire Customer Business Interaction.",
                    "items": {
                        "$ref": "#/definitions/PartyInteractionRole"
                    }
                }
            },
            "required": [
                "relatedPartyInteractionRoles"
            ]
        }
    ],
    "definitions": {
        "PartyInteractionRole": {
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
                                "/cpi/schemas/Party.json"
                            ]
                        }
                    }
                }
            ]
        },
        "CustomerBIItemWithAdd": {
            "allOf": [
                {
                    "$ref": "CustomerBIItem-1.0.0.spec#"
                },
                {
                    "properties": {
                        "action": {
                            "type": "string",
                            "enum": [
                                "Add"
                            ]
                        }
                    }
                }
            ]
        }
    }
}
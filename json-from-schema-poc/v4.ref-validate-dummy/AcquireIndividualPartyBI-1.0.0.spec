{
    "$schema": "http://json-schema.org/draft-04/schema#",
    "id": "AcquireIndividualPartyBI-1.0.0.spec",
    "title": "AcquireIndividualPartyBI-1.0.0",
    "description": "This Business Interaction represents a request to Onboard a party.",
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
                        "/cpi/schemas/AcquireIndividualPartyBI-1.0.0.spec"
                    ]
                },
                "biItems": {
                    "type": "array",
                    "minItems": 1,
                    "maxItems": 1,
                    "description": "The array of Party Business Interaction Item for this Party On Boarding",
                    "items": {
                        "$ref": "#/definitions/PartyBIItemWithAdd"
                    }
                }
            },
            "required": [
                "biItems"
            ]
        }
    ],
    "definitions": {
        "PartyBIItemWithAdd": {
            "allOf": [
                {
                    "$ref": "PartyBIItem-1.0.0.spec#"
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
{
    "$schema": "http://json-schema.org/draft-04/schema#",
    "id": "PartyBIItem-1.0.0.spec",
    "title": "PartyBIItem-1.0.0",
    "description": "A type of Business Interaction Item that represents a Party",
    "allOf": [
        {
            "$ref": "BusinessInteractionItem.json#"
        },
        {
            "properties": {
                "biItemSpecificationRef": {
                    "type": "string",
                    "format": "uri",
                    "description": "Reference to the specification(schema) on which this Business Interaction Item instance is based on. It must be expressed as URI.",
                    "enum": [
                        "/cpi/schemas/PartyBIItem-1.0.0.spec"
                    ]
                },
                "action": {
                    "type": "string",
                    "description": "Specifies the action to be performed on the Involved Entity. Examples: Add, Modify, Delete, Inquiry.",
                    "enum": [
                        "Add",
                        "Update",
                        "Delete"
                    ]
                },
                "involvedEntity": {
                    "type": "object",
                    "additionalProperties": false,
                    "description": "This object represents the Involved Business Entity which is the Party.",
                    "properties": {
                        "entitySpecificationRef": {
                            "type": "string",
                            "format": "uri",
                            "description": "Reference to the specification(schema) describing the Entity contained herein as the property named entity. It must be expressed as URI.",
                            "enum": [
                                "/cpi/schemas/Party.json"
                            ]
                        },
                        "entity": {
                            "$ref": "Party.json#"
                        }
                    }
                }
            },
            "required": [
                "involvedEntity"
            ]
        }
    ]
}

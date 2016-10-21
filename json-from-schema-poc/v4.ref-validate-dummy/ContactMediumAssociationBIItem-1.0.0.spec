{
    "$schema": "http://json-schema.org/draft-04/schema#",
    "id": "ContactMediumAssociationBIItem-1.0.0.spec",
    "title": "ContactMediumAssociationBIItem-1.0.0",
    "description": "A type of Business Interaction Item that represents a ContactMediumAssociation (and optionally its related ContactMedium) operation",
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
                        "/cpi/schemas/ContactMediumAssociationBIItem-1.0.0.spec"
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
                    "description": "This object represents the Involved Business Entity.",
                    "properties": {
                        "entitySpecificationRef": {
                            "type": "string",
                            "format": "uri",
                            "description": "Reference to the specification(schema) describing the Entity contained here as the property named entity. It must be expressed as URI.",
                            "enum": [
                                "#/definitions/ContactMediumWithAssociation"
                            ]
                        },
                        "entity": {
                            "$ref": "#/definitions/ContactMediumWithAssociation"
                        }
                    }
                }
            },
            "required": [
                "involvedEntity"
            ]
        }
    ],
    "definitions": {
        "ContactMediumWithAssociation": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
                "contactMedium": {
                    "$ref": "ContactMedium.json#"
                },
                "contactMediumAssociation": {
                    "$ref": "ContactMediumAssociation.json#"
                }
            },
            "required": [
                "contactMediumAssociation"
            ]
        }
    }
}

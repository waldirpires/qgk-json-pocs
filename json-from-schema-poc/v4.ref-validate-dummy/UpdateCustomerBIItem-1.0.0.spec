{
    "$schema": "http://json-schema.org/draft-04/schema#",
    "id": "UpdateCustomerBIItem-1.0.0.spec",
    "title": "UpdateCustomerBIItem-1.0.0",
    "description": "A type of Business Interaction Item that represents values to be updated in a Customer.",
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
                        "/cpi/schemas/UpdateCustomerBIItem-1.0.0.spec"
                    ]
                },
                "action": {
                    "type": "string",
                    "description": "Specifies the action to be performed on the Involved Entity. Examples: Add, Modify, Delete, Inquiry.",
                    "enum": [
                        "Update"
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
                                "#/definitions/CustomerUpdateInformation"
                            ]
                        },
                        "entity": {
                            "$ref": "#/definitions/CustomerUpdateInformation"
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
        "CustomerUpdateInformation": {
            "type": "object",
            "additionalProperties": false,
            "properties": {
                "homeTimeZones": {
                    "type": "array",
                    "uniqueItems": true,
                    "description": "An array of applicable Time Zones for this Customer.",
                    "items": {
                        "$ref": "TimeZoneValue.json#"
                    }
                }
            },
            "minProperties": 1
        }
    }
}
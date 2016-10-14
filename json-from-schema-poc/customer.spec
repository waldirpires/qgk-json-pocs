{
    "interactionType": "Request",
    "biSpecificationRef": "/cpi/schemas/UpdateCustomerBI-1.0.0.spec",
    "biItems": [
        {
            "description": "{{lorem [100]}}",
            "biItemSpecificationRef": "/cpi/schemas/UpdateCustomerBIItem-1.0.0.spec",
            "action": "Update",
            "involvedEntity": {
                "entitySpecificationRef": "#/definitions/CustomerUpdateInformation",
                "entity": {
					"homeTimeZones": [{\"timeZone\" : \"{{country}}/{{city}}\" }]
                }
            }
        }
    ],
    "relatedPartyInteractionRoles": [
        {
            "role": "Customer",
            "entitySpecificationRef": "/cpi/schemas/Customer.json",
            "entityRef": "/cpi/holisticView/v1/customer/{bi_id}"
        }
    ]
}

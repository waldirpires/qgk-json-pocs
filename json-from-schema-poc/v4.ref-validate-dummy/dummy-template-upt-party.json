{
    "interactionType": "Request",
    "biSpecificationRef": "/cpi/schemas/AcquireIndividualPartyBI-1.0.0.spec",
    "biItems": [
        {
            "description": "Optional description",
            "biItemSpecificationRef": "/cpi/schemas/PartyBIItem-1.0.0.spec",
            "action": "Add",
            "involvedEntity": {
                "entitySpecificationRef": "/cpi/schemas/Party.json",
                "entity": {
                    "partySpecificationRef": "Party.json",
                    "type": "individual",
                    "aliveDuring": {
                        "birthDate": "{{date '2010-01-01T00:00' '2012-01-01T00:00' 'YYYY-MM-DDTHH:mm:ss.sss+ZZ'}}",
                        "deathDate": "{{date '2012-01-01T00:00' '2016-01-01T00:00' 'YYYY-MM-DDTHH:mm:ss.sss+ZZ'}}"
                    },
                    "countryOfBirth": "{{countryCode}}",
                    "validFor": {
                        "start": "{{date '1982-01-01T00:00' '1990-01-01T00:00' 'YYYY-MM-DDTHH:mm:ss.sss+ZZ'}}",
                        "end": "{{date '2012-01-01T00:00' '2016-01-01T00:00' 'YYYY-MM-DDTHH:mm:ss.sss+ZZ'}}"
                    },
                    "maritalStatus": [
                        {
                            "maritalStatus": "{{maritalStatus}}",
                            "validFor": {
								"start": "{{date '1982-01-01T00:00' '1990-01-01T00:00' 'YYYY-MM-DDTHH:mm:ss.sss+ZZ'}}",
								"end": "{{date '2012-01-01T00:00' '2016-01-01T00:00' 'YYYY-MM-DDTHH:mm:ss.sss+ZZ'}}"
                            }
                        }
                    ],
                    "gender": "{{gender}}",
                    "nationality": "{{country}}",
                    "languages": [
                        "{{languages}}"
                    ],
                    "partyNames": [
                        {
                            "givenName": "{{fullName}}",
                            "familyNamePrefix": "von",
                            "familyName": "{{lastName}}",
                            "preferredGivenName": "{{firstName}}",
                            "middleName": "{{lastName}}",
                            "aristocraticTitle": "Baron",
                            "formattedName": "Mr Dr. {{lastName}}",
                            "qualification": "Dr. engineer",
                            "formOfAddress": "{{formOfAddress}}",
                            "language": "{{languages}}"
                        }
                    ],
                    "partyIdentifications": [
                        {
                            "idNumber": "{{int 0 99999999}}",
                            "issuingDate": "{{date '2012-01-01T00:00' '2016-01-01T00:00' 'YYYY-MM-DDTHH:mm:ss.sss+ZZ'}}",
                            "commonName": "Passport",
                            "description": "{{lorem 25}}",
                            "idType": "Passport",
                            "issuingCountry": "{{country}}"
                        }
                    ],
                    "contactMedia": [
                        {
                            "commonName": "Passport",
                            "description": "{{lorem 25}}",
                            "contactMediumSpecificationRef": "{{guid}}"
                        }
                    ]
                }
            },
            "notes": [
                {
                    "text": "{{lorem 30}}"
                },
                {
                    "text": "{{lorem 32}}"
                }
            ],
            "characteristics": [
                {
                    "name": "{{lorem 10}}",
                    "value": "{{lorem 5}}"
                },
                {
                    "name": "{{lorem 11}}",
                    "value": "{{lorem 4}}"
                }
            ]
        }
    ]
}

const jsonData = {
  "type": "record",
  "name": "hp_user_sign_up",
  "namespace": "com.swiggy",
  "fields": [{
    "name": "id",
    "type": "string",
    "default": "NONE"
  },

    {
      "name": "firstname",
      "type": "string"
    },
    {
      "name": "birthdate",
      "type": "string"
    },

    {
      "name": "ssn",
      "type": "string"
    },
    {
      "name": "vehicle_details",
      "type": {
        "type": "record",
        "name": "vehicle",
      },
      "fields": [{
        "name": "license_plate",
        "type": "string"
      },
        {
          "name": "manufacturing_date",
          "type": "string"
        }
      ]
    }
  ]
}

export default jsonData;
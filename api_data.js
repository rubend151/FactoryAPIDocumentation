define({ "api": [
  {
    "type": "get",
    "url": "/beacons",
    "title": "List all beacons",
    "group": "Beacons",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "macaddress",
            "description": "<p>Beacon mac address</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "machineid",
            "description": "<p>ID from the machine connected to the beacon</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n[{\n  \"_id\":\"60197b051a6e50e620e53444\",\n  \"macaddress\":\"F2:03:44:B1:63:97\",\n  \"machineid\":\"601c37a89aeb167446c31880\"\n},\n{\n  \"_id\":\"601ed976182aac34272e5305\",\n  \"macaddress\":\"C4:D6:57:4B:A1:39\",\n  \"machineid\":\"601c38049aeb167446c31881\"\n}]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/beacons.js",
    "groupTitle": "Beacons",
    "name": "GetBeacons"
  },
  {
    "type": "get",
    "url": "/machine/:id",
    "title": "Get a specific machine by ID",
    "group": "Machines",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "reports",
            "description": "<p>List of the machine reports</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Machine title</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Machine description</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n\"reports\":[],\n\"_id\":\"601c38049aeb167446c31881\",\n\"title\":\"Maquina 2\",\n\"description\":\"Description 2\"\n\"__v\":6\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/machines.js",
    "groupTitle": "Machines",
    "name": "GetMachineId"
  },
  {
    "type": "post",
    "url": "/machine/:id/reports",
    "title": "Create a new report",
    "group": "Machines",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "machineComponent",
            "description": "<p>Component name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "serviceTypeComponent",
            "description": "<p>Service type</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "maintenanceType",
            "description": "<p>Maintenance type</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "initialDate",
            "description": "<p>Maintenance initialization date</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "finishDate",
            "description": "<p>Maintenance finalization date</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "reportText",
            "description": "<p>Report description</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Report title</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "techName",
            "description": "<p>Technician name</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n  \"id\": ObjectId(501c38049aeb167446c31881),\n  \"machineComponent\": 'Component',\n  \"serviceTypeComponent\": 'Service',\n  \"maintenanceType\": 'Type',\n  \"initialDate\": new Date(),\n  \"finishDate\": new Date(),\n  \"reportText\": 'Test',\n  \"title\": 'Title',\n  \"techName\": 'Technician name'\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Update error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/machines.js",
    "groupTitle": "Machines",
    "name": "PostMachineIdReports"
  },
  {
    "type": "put",
    "url": "/machine/reports",
    "title": "Delete report",
    "group": "Machines",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "ObjectId",
            "optional": false,
            "field": "id",
            "description": "<p>Report id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{\n  \"id\": ObjectId(501c38049aeb167446c31881)\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/machines.js",
    "groupTitle": "Machines",
    "name": "PutMachineReports"
  },
  {
    "type": "get",
    "url": "/scenarios",
    "title": "List all scenarios",
    "group": "Scenarios",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "machines[]",
            "description": "<p>List of ids from the machines inside the scenario</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Scenario title</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstColor",
            "description": "<p>Scenario background color (gradient)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "secondColor",
            "description": "<p>Scenario background color (gradient)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "expanded",
            "description": "<p>Specify if the scenario must be expanded on the user interface</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "subcategory[]",
            "description": "<p>Shows all machines data inside the scenario</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "   HTTP/1.1 200 OK\n   [{\n   \"machines\":[\n      \"601c37a89aeb167446c31880\"\n   ],\n   \"_id\":\"60186c76edc77e3e9421f5ba\",\n   \"title\":\"Zona 1\",\n   \"firstColor\":\"#f472a7\",\n   \"secondColor\":\"#d84351\",\n   \"isExpanded\":false,\n   \"subcategory\":[{}]\n },\n {\n    \"machines\":[\n       \"601c38049aeb167446c31881\"\n    ],\n    \"_id\":\"602411ad4bbcad065d09ea20\",\n     \"title\":\"Zona 2\",\n    \"firstColor\":\"#50be71\",\n    \"secondColor\":\"#1f6a64\",\n    \"isExpanded\":false,\n    \"subcategory\":[{}]\n }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/scenarios.js",
    "groupTitle": "Scenarios",
    "name": "GetScenarios"
  },
  {
    "type": "get",
    "url": "/user/avatar/:email",
    "title": "Get user avatar",
    "group": "Users",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "User",
            "description": "<p>avatar</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error",
          "content": "HTTP/1.1 401 error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/users.js",
    "groupTitle": "Users",
    "name": "GetUserAvatarEmail"
  },
  {
    "type": "get",
    "url": "/user/:id",
    "title": "Retreive specific user",
    "group": "Users",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "userName",
            "description": "<p>User full name</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User e-mail</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User password</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "userType",
            "description": "<p>User type (administrator or technician)</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "status",
            "description": "<p>User status</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "schedule",
            "description": "<p>User schedule</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n{\n\"schedule\":[\n    {\n      \"_id\":\"601adfef0b92a63fe8ddff18\",\n      \"title\":\"00:00h até 00:00h\",\n      \"firstColor\":\"#f472a7\",\n      \"secondColor\":\"#d84351\",\n      \"subcategory\":[\n          {\n            \"title\":\"Função 1\",\n            \"description\":\"Descrição da função 1\"\n          },\n          {\n            \"title\":\"Função 2\",\n            \"description\":\"Descrição da função 2\"\n          }\n      ],\n      \"isExpanded\":false\n    }\n],\n\"_id\":\"60184920edc77e3e9421f5b8\",\n\"userName\":\"Teste Unitário 13\",\n\"email\":\"email@gmail.com\",\n\"password\":\"$2b$10$LegZK7jAPyVtKV4A/8/Utu51rZ5fgFcf1nP/sfu1ivHA6Fg6IhVTa\",\n\"userType\":1,\n\"status\":true\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/users.js",
    "groupTitle": "Users",
    "name": "GetUserId"
  },
  {
    "type": "get",
    "url": "/users",
    "title": "List all user types",
    "group": "Users",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>User type title</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstColor",
            "description": "<p>User type background color (gradient)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "secondColor",
            "description": "<p>User type background color (gradient)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "expanded",
            "description": "<p>Specify if the user type must be expanded on the user interface</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "inactive",
            "description": "<p>Specify if the user type is for inactive users</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "users",
            "description": "<p>List of the users from a specific user type</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK\n[{\n  \"_id\":\"601836aaedc77e3e9421f5b3\",\n  \"title\":\"Chefe de produção\",\n  \"firstColor\":\"#50be71\",\n  \"secondColor\":\"#1f6a64\",\n  \"isExpanded\":false,\n  \"inactive\":false,\n  \"type\":2,\n  \"users\":[]\n},\n{\n  \"_id\":\"60183518edc77e3e9421f5b2\",\n  \"title\":\"Tecnico de manutenção\",\n  \"firstColor\":\"#50be71\",\n  \"secondColor\":\"#1f6a64\",\n  \"isExpanded\":false,\n  \"inactive\":false,\n  \"type\":1,\n  \"users\":[]\n}]",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/users.js",
    "groupTitle": "Users",
    "name": "GetUsers"
  },
  {
    "type": "post",
    "url": "/login",
    "title": "Login",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User email</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{ \"email\": \"email@gmail.com\", \n  \"password\": \"1234\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/users.js",
    "groupTitle": "Users",
    "name": "PostLogin"
  },
  {
    "type": "post",
    "url": "/recoverPassword",
    "title": "Recover user password",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User email</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{ \"email\": \"email@gmail.com\" }",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/users.js",
    "groupTitle": "Users",
    "name": "PostRecoverpassword"
  },
  {
    "type": "post",
    "url": "/user/:id",
    "title": "",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>User name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "avatar",
            "description": "<p>User avatar</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "newpassword",
            "description": "<p>User new password</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{ \n  username: \"Teste\",\n  avatar: 'empty',\n  newpassword: 'teste'\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/users.js",
    "groupTitle": "Users",
    "name": "PostUserId"
  },
  {
    "type": "put",
    "url": "/activateUser",
    "title": "Deactivate user",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>User id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{ \"id\": \"501c38049aeb167446c31881\" }",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/users.js",
    "groupTitle": "Users",
    "name": "PutActivateuser"
  },
  {
    "type": "put",
    "url": "/activateUsers",
    "title": "Activate multiple users",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "ids",
            "description": "<p>User ids</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{ \"ids\": [\"501c38049aeb167446c31881\", \"601c38049aeb167446c31881\"] }",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/users.js",
    "groupTitle": "Users",
    "name": "PutActivateusers"
  },
  {
    "type": "put",
    "url": "/deactivateUser",
    "title": "Deactivate user",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>User id</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "{ \"id\": \"501c38049aeb167446c31881\" }",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/users.js",
    "groupTitle": "Users",
    "name": "PutDeactivateuser"
  },
  {
    "type": "put",
    "url": "/deactivateUsers",
    "title": "Deactivate multiple users",
    "group": "Users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "ids",
            "description": "<p>User ids</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Input",
          "content": "[\"501c38049aeb167446c31881\", \"601c38049aeb167446c31881\"]",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error",
          "content": "HTTP/1.1 500 Internal Server Error",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/users.js",
    "groupTitle": "Users",
    "name": "PutDeactivateusers"
  }
] });

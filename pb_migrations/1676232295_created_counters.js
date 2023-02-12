migrate((db) => {
  const collection = new Collection({
    "id": "r55n9fgiu8ghynp",
    "created": "2023-02-12 20:04:55.690Z",
    "updated": "2023-02-12 20:04:55.690Z",
    "name": "counters",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "elbxgvog",
        "name": "title",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "vdod19kn",
        "name": "totalCount",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": 0,
          "max": null
        }
      },
      {
        "system": false,
        "id": "h4jezrzn",
        "name": "goalCount",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": 0,
          "max": null
        }
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("r55n9fgiu8ghynp");

  return dao.deleteCollection(collection);
})

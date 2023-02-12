migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("r55n9fgiu8ghynp")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zwslmlmz",
    "name": "memberIds",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jvtcjtvz",
    "name": "joinPassword",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("r55n9fgiu8ghynp")

  // remove
  collection.schema.removeField("zwslmlmz")

  // remove
  collection.schema.removeField("jvtcjtvz")

  return dao.saveCollection(collection)
})

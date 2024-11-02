/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ceji7ucj0o9gzyl")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "u4gpnzkr",
    "name": "position",
    "type": "text",
    "required": false,
    "presentable": false,
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
  const collection = dao.findCollectionByNameOrId("ceji7ucj0o9gzyl")

  // remove
  collection.schema.removeField("u4gpnzkr")

  return dao.saveCollection(collection)
})

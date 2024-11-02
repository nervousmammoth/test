/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("e83k2rmv5dmc2xm")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "rzkjiuc2",
    "name": "tags",
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
  const collection = dao.findCollectionByNameOrId("e83k2rmv5dmc2xm")

  // remove
  collection.schema.removeField("rzkjiuc2")

  return dao.saveCollection(collection)
})

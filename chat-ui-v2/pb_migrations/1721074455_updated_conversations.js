/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("e83k2rmv5dmc2xm")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "7rytcsfb",
    "name": "comment",
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
  collection.schema.removeField("7rytcsfb")

  return dao.saveCollection(collection)
})

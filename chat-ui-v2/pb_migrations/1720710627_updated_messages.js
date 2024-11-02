/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("yeru2i4s5whkbhe")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "a56xrfv5",
    "name": "timestamp",
    "type": "date",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("yeru2i4s5whkbhe")

  // remove
  collection.schema.removeField("a56xrfv5")

  return dao.saveCollection(collection)
})

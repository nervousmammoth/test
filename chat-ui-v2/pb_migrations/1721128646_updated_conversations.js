/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("e83k2rmv5dmc2xm")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "l7iljnna",
    "name": "done",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("e83k2rmv5dmc2xm")

  // remove
  collection.schema.removeField("l7iljnna")

  return dao.saveCollection(collection)
})

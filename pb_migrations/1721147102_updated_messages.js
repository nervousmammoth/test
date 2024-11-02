/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("yeru2i4s5whkbhe")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "o31imk1p",
    "name": "translated",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("yeru2i4s5whkbhe")

  // remove
  collection.schema.removeField("o31imk1p")

  return dao.saveCollection(collection)
})

/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("623qum3f2oct9ro")

  // remove
  collection.schema.removeField("padxy5rw")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ef3axjen",
    "name": "conversation",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "e83k2rmv5dmc2xm",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("623qum3f2oct9ro")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "padxy5rw",
    "name": "conversation_id",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "yeru2i4s5whkbhe",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // remove
  collection.schema.removeField("ef3axjen")

  return dao.saveCollection(collection)
})

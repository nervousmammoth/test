/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("e83k2rmv5dmc2xm")

  collection.name = "conversations"

  // remove
  collection.schema.removeField("zce33tse")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ung1l7lp",
    "name": "is_relevant",
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

  collection.name = "Conversations"

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zce33tse",
    "name": "last_message_at",
    "type": "date",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  // remove
  collection.schema.removeField("ung1l7lp")

  return dao.saveCollection(collection)
})

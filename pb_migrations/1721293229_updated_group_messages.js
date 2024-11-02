/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zxj1vhezl797a5v")

  // remove
  collection.schema.removeField("tamfcyzy")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "sbyqdabm",
    "name": "group_conversation_id",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "ps86pkfg46z41b5",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zxj1vhezl797a5v")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "tamfcyzy",
    "name": "conversation_id",
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

  // remove
  collection.schema.removeField("sbyqdabm")

  return dao.saveCollection(collection)
})

/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("mvon5vzgeebtwoq")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mlmcvks3",
    "name": "members",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "ceji7ucj0o9gzyl",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("mvon5vzgeebtwoq")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mlmcvks3",
    "name": "participants",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "ceji7ucj0o9gzyl",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
})
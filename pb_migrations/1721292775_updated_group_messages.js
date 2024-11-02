/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jq6xe1wwyisz1i1")

  // remove
  collection.schema.removeField("dypa7tm3")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jq6xe1wwyisz1i1")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "dypa7tm3",
    "name": "group_chat",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "mvon5vzgeebtwoq",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
})

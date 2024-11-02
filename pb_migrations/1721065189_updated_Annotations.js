/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("623qum3f2oct9ro")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qmc2ns2g",
    "name": "investigator_id_",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "ceji7ucj0o9gzyl",
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

  // remove
  collection.schema.removeField("qmc2ns2g")

  return dao.saveCollection(collection)
})

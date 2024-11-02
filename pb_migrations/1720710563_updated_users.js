/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ceji7ucj0o9gzyl")

  // remove
  collection.schema.removeField("e5qhjv0f")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ceji7ucj0o9gzyl")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "e5qhjv0f",
    "name": "email",
    "type": "email",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "exceptDomains": null,
      "onlyDomains": null
    }
  }))

  return dao.saveCollection(collection)
})

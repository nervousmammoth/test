/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("yeru2i4s5whkbhe")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "eh98nkst",
    "name": "content_translated",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("yeru2i4s5whkbhe")

  // remove
  collection.schema.removeField("eh98nkst")

  return dao.saveCollection(collection)
})

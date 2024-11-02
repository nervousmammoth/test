/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ceji7ucj0o9gzyl")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "yaiq080w",
    "name": "alias",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "iu9bok91",
    "name": "suspectedRole",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "lciytflw",
    "name": "knownSkills",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "1wv0yzqg",
    "name": "lastKnownIP",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "bx9k8yid",
    "name": "associatedMalware",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "of4vbbsw",
    "name": "status",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "active",
        "inactive",
        "under surveillance",
        "arrested"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ceji7ucj0o9gzyl")

  // remove
  collection.schema.removeField("yaiq080w")

  // remove
  collection.schema.removeField("iu9bok91")

  // remove
  collection.schema.removeField("lciytflw")

  // remove
  collection.schema.removeField("1wv0yzqg")

  // remove
  collection.schema.removeField("bx9k8yid")

  // remove
  collection.schema.removeField("of4vbbsw")

  return dao.saveCollection(collection)
})

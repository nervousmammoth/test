/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "mvon5vzgeebtwoq",
    "created": "2024-07-11 15:13:11.438Z",
    "updated": "2024-07-11 15:13:11.438Z",
    "name": "groupchats",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "usnx9e8e",
        "name": "name",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
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
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("mvon5vzgeebtwoq");

  return dao.deleteCollection(collection);
})

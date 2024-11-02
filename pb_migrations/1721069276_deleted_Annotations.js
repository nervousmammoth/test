/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("623qum3f2oct9ro");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "623qum3f2oct9ro",
    "created": "2024-07-15 17:38:01.602Z",
    "updated": "2024-07-15 18:07:39.277Z",
    "name": "Annotations",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "vnq4dv8u",
        "name": "is_relevant",
        "type": "bool",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {}
      },
      {
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
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
})

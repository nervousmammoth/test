/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("mvon5vzgeebtwoq")

  collection.name = "group_chats"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("mvon5vzgeebtwoq")

  collection.name = "groupchats"

  return dao.saveCollection(collection)
})

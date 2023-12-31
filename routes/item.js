const {
  createItem,
  getAllItems,
  getItemDetails,
  deleteItem,
  updateItem,
  getCategoryItems,
  getRecentlyViewed,
} = require("../controllers/item");
const { uploadImage } = require("../middlewars");
const { ItemValidate } = require("../modules/Item");
const route = require("express").Router();

//Create new item
route.post("/create-item", uploadImage.single("image"), createItem);

//Get all items
route.get("/get-items", getAllItems);

//Get item details
route.get("/get-item/:itemId", getItemDetails);

//Delete item
route.delete("/delete-item/:itemId", deleteItem);

//Update item
route.put("/update-item/:itemId", uploadImage.single("image"), updateItem);

//Get category items
route.get("/category-items/:categoryName", getCategoryItems);

//Get Recently Viewed Items
route.get("/recently-viewed", getRecentlyViewed);

module.exports = route;

const {
  createCategory,
  getAllCategories,
  getCategory,
  updateCategory,
  deleteCategory,
} = require("../controllers/category");
const { validateBody } = require("../middlewars");
const { categoryValidate } = require("../modules/Category");
const route = require("express").Router();

//Create new category
route.post("/create-category", createCategory);

// validateBody(categoryValidate);

//Show all categories
route.get("/get-categories", getAllCategories);

//Get category
route.get("/get-category/:categoryId", getCategory);

//Update category
route.put("/update-category/:categoryId", updateCategory);

//Delete category
route.delete('/delete-category/:categoryId', deleteCategory);

module.exports = route;

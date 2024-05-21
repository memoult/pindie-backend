const { createCategory, findAllCategories, findCategoryById, updateCategory, deleteCategory, checkIsCategoryExists } = require ('../middlewares/categories');
const { sendCategoryCreated, sendCategoryById, sendCategoryUpdated, sendCategoryDeleted } = require ('../controllers/categories');
const { sendAllCategories } = require('../controllers/categories');

const categoriesRouter = require('express').Router();

categoriesRouter.post(
    "/categories", 
    findAllCategories,
    checkIsCategoryExists,
    createCategory, 
    sendCategoryCreated
);

categoriesRouter.get('/categories', findAllCategories, sendAllCategories);
categoriesRouter.get("/categories/:id", findCategoryById, sendCategoryById);
categoriesRouter.put('/categories/:id', updateCategory, sendCategoryUpdated);
categoriesRouter.delete("/categories/:id", deleteCategory, sendCategoryDeleted);

module.exports = categoriesRouter;
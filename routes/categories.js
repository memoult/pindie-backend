const { createCategory, findAllCategories, findCategoryById, updateCategory, deleteCategory, checkIsCategoryExists, checkEmptyName } = require ('../middlewares/categories');
const { sendCategoryCreated, sendCategoryById, sendCategoryUpdated, sendCategoryDeleted } = require ('../controllers/categories');
const { sendAllCategories } = require('../controllers/categories');
const { checkAuth } = require('../middlewares/auth');

const categoriesRouter = require('express').Router();

categoriesRouter.post(
    "/categories", 
    findAllCategories,
    checkIsCategoryExists,
    checkEmptyName,
    checkAuth,
    createCategory,
    sendCategoryCreated,
);

categoriesRouter.get('/categories', findAllCategories, sendAllCategories);
categoriesRouter.get("/categories/:id", findCategoryById, sendCategoryById);
categoriesRouter.put('/categories/:id', checkEmptyName, checkAuth, updateCategory, sendCategoryUpdated);
categoriesRouter.delete("/categories/:id", checkAuth, deleteCategory, sendCategoryDeleted);

module.exports = categoriesRouter;
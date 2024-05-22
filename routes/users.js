const { findAllUsers, createUser, findUserById, updateUser, deleteUser, checkIsUserExists, checkEmptyNameAndEmailAndPassword, checkEmptyNameAndEmail, hashPassword } = require('../middlewares/users.js');
const { sendAllUsers, sendUserCreated, sendUserById, sendUserUpdated, sendUserDeleted, sendMe } = require('../controllers/users.js');
const { checkAuth } = require('../middlewares/auth.js');

const usersRouter = require('express').Router();

usersRouter.get("/users", findAllUsers, sendAllUsers);

usersRouter.post(
    "/users",
    findAllUsers, 
    checkIsUserExists, 
    checkEmptyNameAndEmailAndPassword, 
    checkAuth, 
    hashPassword, 
    createUser, 
    sendUserCreated
  );

  usersRouter.get("/users/:id", findUserById, sendUserById);
  usersRouter.put("/users/:id", checkEmptyNameAndEmail, checkAuth, updateUser, sendUserUpdated); 
  usersRouter.delete("/users/:id", checkAuth, deleteUser, sendUserDeleted);
  usersRouter.get("/me", checkAuth, sendMe); 


module.exports = usersRouter;
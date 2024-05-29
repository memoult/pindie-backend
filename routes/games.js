    const { findAllGames, createGame, findGameById, updateGame, deleteGame, checkEmptyFields, checkIfCategoriesAvaliable, checkIfUsersAreSafe, checkIsGameExists, checkIsVoteRequest } = require ('../middlewares/games');
    const { sendAllGames, sendGameCreated, sendGameById, sendGameUpdated, sendGameDeleted } = require ('../controllers/games');
    const { checkAuth } = require('../middlewares/auth');

    const gamesRouter = require('express').Router();

    gamesRouter.post("/games", findAllGames, createGame, sendGameCreated, checkIsGameExists, checkIfCategoriesAvaliable, checkEmptyFields, checkAuth);

    gamesRouter.get('/games', findAllGames, sendAllGames);
    gamesRouter.get("/games/:id", findGameById, sendGameById);
    gamesRouter.put('/games/:id', findGameById, updateGame, sendGameUpdated, checkIsVoteRequest, checkIfUsersAreSafe, checkIfCategoriesAvaliable, checkEmptyFields, checkAuth);

    gamesRouter.delete('/games/:id', checkAuth, deleteGame, sendGameDeleted);

    module.exports = gamesRouter;
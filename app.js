const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const usersRouter = require('./routes/users');
const gamesRouter = require('./routes/games');
const categoriesRouter = require('./routes/categories');

const app = express();
const PORT = 3000;

app.use(
  bodyParser.json(),
  express.static(path.join(__dirname, 'public')),
  usersRouter, 
  categoriesRouter, 
  gamesRouter
);

app.listen(PORT);
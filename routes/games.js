const { Router } = require('express');
const path = require('path');
const gameRouter = Router();
const { cardPage, displayNames } = require('../controllers/gameCtrl')

gameRouter.get('/cardGames', cardPage);
gameRouter.post('/cardGames', displayNames)

module.exports = gameRouter;



























// code from exercise
// gameRouter.get('/boardgames', (req, res, next) => {
//   console.log("fetching some boardgames");
//   res.sendFile(path.join(__dirname, '../public', 'boardgames.html'));
// })


// gameRouter.get('/videogames', (req, res, next) => {
//   console.log("fetching video games");
//   res.send(`<h3> Search for Games<h3><form method="POST"><input type ="text"><button type="submit">push</button></form>`);
// })


// gameRouter.post('/videogames', (req, res, next) => {
//   console.log("submitting a form post request for videogames");
// })

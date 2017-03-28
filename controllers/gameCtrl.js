'use strict'

const { join } = require('path');
const gameData = require('../models/games');

const gameNames = gameData.map( (game) => game.name);

module.exports.displayNames = (req,res,err) => {
  res.sendFile(join(__dirname, '../public', `${req.url}.html`));
}

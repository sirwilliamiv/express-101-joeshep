'use strict'
//controllers job is to define the logic of the application
const { join }= require('path');
const chickData = require('../models/chicken');


const chickenNames = chickData.map( (chicken) => chicken.name);


module.exports.newPage = (req, res, err) => {
  res.sendFile(join(__dirname, '../public', `${req.url}.html`))
}
module.exports.submit = (req,res,err) => {
  console.log(`submitting form for ${req.url}`)
  res.send(`no chickens found. kfc found them first and served up ${chickenNames.join(' and ')}`)
}

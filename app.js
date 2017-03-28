'use strict'

const express = require('express');
const app = express();
require('dotenv').config();

//no need for explicit index.js
const routes = require('./routes/');
//above line executes what the 2 lines below this do
// const animalRoutes = require('./routes/animals')
// const gameRoutes = require('./routes/games');

//middleware
const requestTime = (request, response, next) => {
  request.requestedTime = Date.now();
  next()
}

app.use(express.static(__dirname + '/public'))
app.use(routes);
//above line executes what the 2 lines below this do
// app.use(gameRoutes);
// app.use(animalRoutes);
app.use(requestTime);
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`server listening on port ${port}`);
})










// app.get('/monkeys', (request,response, next)=> {
//  console.log("fetching monkeys")
//  console.log(`HERE ${request.requestedTime}`)
//  console.log(`this ran at ${request.requestedTime}`)
//  response.sendFile(__dirname+ '/public/monkeys.html')

// })

// app.get('/chickens', (request, response, next)=> {
//   console.log(`
//            _______
//           | _     |
//     o     |_o=--  |
//    ()    o
//    |\,`)
//   response.send(`<h3>No chickens for you</h3><form method="POST"><input type="text"><button type="submit">push</button></form>`)
// })

// app.post('chickens', (request,response,next) => {
//   console.log(`
//    `)
// })

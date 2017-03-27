const { Router } = require('express');
const path = require('path');
const animalRouter = Router();


//applying middleware to all routes in router

// animalRouter.use((req,res,next) => {
//   if (req.user === 'farmer') {
//     next()
//   } else {
//     res.status(403).send('Forbidden')
//   }
// })



animalRouter.get('/monkeys', (request, response, next) => {
      console.log("fetching monkeys")
      console.log(`HERE ${request.requestedTime}`)
      console.log(`this ran at ${request.requestedTime}`)
      response.sendFile(path.join(__dirname, '../public', 'monkeys.html'))

      })

    animalRouter.get('/chickens', (request, response, next) => {
      console.log(`
           _______
          | _     |
    o     |_o=--  |
   ()    o
   |\,`)
      response.send(`<h3>No chickens for you</h3><form method="POST"><input type="text"><button type="submit">push</button></form>`)
    })

    animalRouter.post('chickens', (request, response, next) => {
      console.log(`
   `)
    })

    module.exports = animalRouter;

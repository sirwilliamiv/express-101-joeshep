const { Router } = require('express');
const path = require('path');
const animalRouter = Router();
const { newPage, submit } = require('../controllers/animalCtrl')


//applying middleware to all routes in router
animalRouter.get('/monkeys', (request, response, next) => {
      animal.new(req,res, null)
      })

    animalRouter.get('/chickens', newPage);
    animalRouter.post('/chickens', submit);
    module.exports = animalRouter;



//previous code from using router page to show middleware example

// animalRouter.use((req,res,next) => {
//   if (req.user === 'farmer') {
//     next()
//   } else {
//     res.status(403).send('Forbidden')
//   }
// })



      // console.log("fetching monkeys")
      // console.log(`HERE ${request.requestedTime}`)
      // console.log(`this ran at ${request.requestedTime}`)
      // response.sendFile(path.join(__dirname, '../public', 'monkeys.html'))


      // animalRouter.get('/chickens', (request, response, next) => {
   //    console.log(`
   //         _______
   //        | _     |
   //  o     |_o=--  |
   // ()    o
   // |\,`)
   //    // response.send(`<h3>No chickens for you</h3><form method="POST"><input type="text"><button type="submit">push</button></form>`)
    // })




   //  animalRouter.post('chickens', (request, response, next) => {
   //    console.log(`
   // `)
   //  })

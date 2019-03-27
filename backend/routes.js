const controllers = require('./controllers');
const path = require('path');

module.exports = app => {
  app
    .get('/api/restaurants', controllers.getAll)
    .get('/api/restaurants/:id', controllers.getOne)
    .post('/api/restaurants', controllers.create)
    .put('/api/restaurants/:id', controllers.update)
    .delete('/api/restaurants/:id', controllers.delete)
    .get('/api/reviews', controllers.getOne)
    .put('/api/reviews/:id', controllers.createReview)
    .all("*", (req, res, next) => {
      res.sendFile(path.resolve('./public/dist/public/index.html'))
    });
}
const Restaurant = require('./models');

module.exports = {
  getAll: (req, res) => {
    Restaurant.find({})
      .then(data => res.json(data))
      .catch(err => res.json(err));
  },

  getOne: (req, res) => {
    const ID = req.params.id;
    Restaurant.findOne({_id: ID})
      .then(data => res.json(data))
      .catch(err => res.json(err));
  },

  create: (req, res) => {
    const DATA = req.body;
    console.log(DATA);
    Restaurant.create(DATA)
      .then(data => res.json(data))
      .catch(err => res.json(err));
  },

  update: (req, res) => {
    const DATA = req.body; 
    const ID = req.params.id; 
    Restaurant.findOneAndUpdate({_id: ID}, DATA, { runValidators: true, new: true})
      .then(data => res.json(data))
      .catch(err => res.json(err));
  },

  delete: (req, res) => {
    const ID = req.params.id; 
    Restaurant.findOneAndDelete({_id: ID})
      .then(data => res.json(data))
      .catch(err => res.json(err));
  },

  createReview: (req, res) => {
    const ID = req.params.id;
    const DATA = req.body; 
    Restaurant.updateOne({_id:ID},{$push: {reviews: DATA}}, {runValidators:true, new:true})
      .then(data => res.json(data))
      .catch(err => res.json(err));
  },
}
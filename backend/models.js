const mongoose = require('mongoose');
const connectString = 'mongodb://localhost/restaurants';
mongoose.connect(connectString, {useNewUrlParser:true})
  .catch(err => console.log(err));

const RestaurantSchema = new mongoose.Schema ({
  name: {
    type: String, 
    required: [true, 'The restaurant field cannot be blank'],
    minlength: [3, 'Restaurant names must be longer than 3 characters'],
  },
  cuisine: {
    type: String, 
    required: [true, 'The cuisine field cannot be blank'],
    minlength: [3, 'Type of cuisine must be longer than 3 characters'],
  },
  reviews: [{
    name: {
      type: String, 
      required: [true, 'The name field cannot be blank'],
      minlength: [3, 'The reviewer\'s name must be longer than 3 characters'],
    },
    review: {
      type: String, 
      required: [true, 'The review field cannot be blank!'],
      minlength: [3, 'Reviews must be longer than 3 characters']
    },
    star: {
      type: Number,
      required: [true, 'A rating between 1-5 stars must be selected!'],
      min: [1, 'Rating must be between 1 to 5'],
      max: [5, 'Rating must be between 1 to 5'],
      default: 0,
    }
  }]
}, {timestamps: true})

module.exports = mongoose.model('Restaurant', RestaurantSchema);


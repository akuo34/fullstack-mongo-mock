// build your database
var mongoose = require('mongoose');
var productSchema = require('./schema.js');
var mongoUri = 'mongodb://localhost/ebidProducts';
// allow use of es6 promises
mongoose.Promise = global.Promise;

// Connect Mongoose to our local MongoDB via URI specified above and export it below
var db = mongoose.connect(mongoUri, {useNewUrlParser: true})
  .then(() => console.log('connected to DB'))
  .catch( err => console.error(err))

// Register the productSchema with Mongoose as the 'Product' collection.
const Product = mongoose.model('Product', productSchema);

module.exports = Product;
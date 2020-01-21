var Product = require('./index.js');
// complete the dbhelpers
var helpers = {
  getProductsHelper: () => Product.find(),
  postProductsHelper: (item, min_cost, curr_bid, ends_in, image) => Product.create({item, min_cost, curr_bid, ends_in, image}),
  updateProductHelper: (_id, curr_bid) => Product.findByIdAndUpdate({_id}, {curr_bid}),
  deleteProductHelper: (_id) => Product.findByIdAndDelete({_id})
};

module.exports = helpers;
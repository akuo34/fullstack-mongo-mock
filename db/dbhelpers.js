var Product = require('./');
// complete the dbhelpers
var helpers = {
  getProductsHelper: () => Product.find(),
  postProductsHelper: (item, min_cost, curr_bid, ends_in, image) => Product.create({item, min_cost, curr_bid, ends_in, image}),
  updateProductHelper: (_id, item, min_cost, curr_bid, ends_in, image) => Product.findByIdAndUpdate({_id}, {item, min_cost, curr_bid, ends_in, image}),
  deleteProductHelper: (_id) => Product.findByIdAndDelete({_id})
};

module.exports = helpers
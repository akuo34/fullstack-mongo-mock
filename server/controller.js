// Controller here
// complete building out the controller
const helpers = require('../db/dbhelpers.js');

const controller = {
  get: (req, res) => {
    helpers.getProductsHelper()
      .then((data) => res.status(200).send(data))
      .catch( err => res.status(404).send(err))
  },
  post: (req, res) => {
    const {item, min_cost, curr_bid, ends_in, image} = req.body;
    helpers.postProductsHelper(item, min_cost, curr_bid, ends_in, image)
    .then(() => res.status(201).send("posted to database"))
    .catch( err => res.status(400).send(err))
  },
  put: (req, res) => {
    const {item, min_cost, curr_bid, ends_in, image} = req.body;
    helpers.updateProductHelper(req.params._id, item, min_cost, curr_bid, ends_in, image)
    .then(() => res.status(201).send("updated to database"))
    .catch( err => res.status(400).send(err))
  },
  delete: (req, res) => {
    helpers.deleteProductHelper(req.params._id)
    .then(() => res.status(200).send('deleted from database'))
    .catch( err => res.status(404).send(err))
  }
}

module.exports = controller
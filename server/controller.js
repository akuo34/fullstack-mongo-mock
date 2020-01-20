// Controller here
// complete building out the controller
var Product = require('../db/')

const controller = {
  get: (req, res) => {
    res.status(200).send('This is your get request, modify this file to use your router!')
  },
  post: (req, res) => {
    res.status(200).send('This is your post request, modify this file to use your router!')
  },
  put: (req, res) => {
    res.status(200).send('This is your put request, modify this file to use your router!')
  },
  delete: (req, res) => {
    res.status(200).send('This is your delete request, modify this file to use your router!')
  }
}

module.exports = controller
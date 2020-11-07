const express = require('express')
const router = express.Router()
const db = require('../../models')

router.get('', (req, res) => {
  db.Customer.findAll().then(companies => res.json(companies))
})
// const postController = require('../controllers/postController')

/* router.get('', postController.index)

router.post('/', postController.store)

router.get('/:id', (request, response, next) => {
  const $params = request.query
  response.send('We are on post number ' + request.params.id)
}) */

module.exports = router

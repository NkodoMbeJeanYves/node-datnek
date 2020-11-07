const express = require('express')
const router = express.Router()
const db = require('../../models')
const languageController = require('../../controllers/LanguageController')

router.get('', languageController.findAll)
router.get('/name=:name', languageController.findByName)
router.get('/:id', languageController.findOne)
router.post('', languageController.store)
router.put('/:id', languageController.update)
router.patch('/:id', languageController.update)
router.delete('/:id', languageController.delete)

module.exports = router

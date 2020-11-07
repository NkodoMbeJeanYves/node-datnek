const express = require('express')
const router = express.Router()
const db = require('../../models')
const companyController = require('../../controllers/CompanyController')

router.get('', companyController.findAll)
router.get('/name=:name', companyController.findByName)
router.get('/:id', companyController.findOne)
router.post('', companyController.store)
router.put('/:id', companyController.update)
router.patch('/:id', companyController.update)
router.delete('/:id', companyController.delete)

module.exports = router

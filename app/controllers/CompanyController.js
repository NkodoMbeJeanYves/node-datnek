const db = require('../models')
const Company = db.Company
const Op = db.Sequelize.Op
/**
 * 
 * @param {*} request 
 * @param {*} response 
 * @Comment get all companies
 * @methods findAll(), findAndCountAll
 */
exports.findAll = (request, response) => {
  db.Company.findAll().then(companies => response.json(companies))
}

/**
 * 
 * @param {*} request 
 * @param {*} response 
 * @Comment store company
 * @method findOrCreate
 */
exports.store = (request, response) => {
  const company = {
    id: request.body.id,
    name: request.body.name
  }
  Company.create(company).then(data => {
    response.send(data)
  }).catch(err => {
    response.status(500).send({
      message: err.message || 'Some error occured while creating the company'
    })
  })
}

/**
 * 
 * @param {*} request 
 * @param {*} response 
 * @method findOne or findByPk
 */
exports.findOne = (request, response) => {
  const param = request.params.id
  Company.findByPk(param).then(companies => response.json(companies))
}


/**
 * 
 * @param {*} request 
 * @param {*} response 
 * @method findOne or findByPk
 */
exports.findByName = (request, response) => {
  const name = request.params.name
  const condition = name ? { name: { [Op.like]: `%${name}%` } } : null
  Company.findAll({ where: condition })
    .then(data => response.json(data))
    .catch(err => {
      response.status(500).send({
        message: err.message || 'Some error occured while retrieving companies'
      })
    })
}

/**
 * 
 * @param {*} request 
 * @param {*} response 
 * @comment update company
 */
exports.update = (request, response) => {
  const id = request.params.id

  Company.update(request.body, {
    where: { id: id }
  }).then(data => {
    if (data === 1) {
      response.json({ message: 'Company was updated successfully!' })
    } else {
      response.json({ message: 'Cannot update company with id=' + id })
    }
  }).catch(err => {
    response.json({ message: err }).status(500)
  })
}  

exports.delete = (request, response) => {
  const id = request.params.id
  Company.destroy({
    where: { id: id }
  }).then(data => {
    if (data === 1) {
      response.json({ message: 'Company was deleted successfully!' })
    } else {
      response.json({ message: 'Cannot delete company with id=' + id })
    }
  }).catch(err => {
    response.json({ message: err }).status(500)
  })
}
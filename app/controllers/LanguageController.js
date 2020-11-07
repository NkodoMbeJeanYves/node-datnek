const db = require('../models')
const Language = db.Language
const Op = db.Sequelize.Op
/**
 * 
 * @param {*} request 
 * @param {*} response 
 * @Comment get all languages
 * @methods findAll(), findAndCountAll
 */
exports.findAll = (request, response) => {
  db.Language.findAll().then(languages => response.status(200).json(languages))
}

/**
 * 
 * @param {*} request 
 * @param {*} response 
 * @Comment store Language
 * @method findOrCreate
 */
exports.store = (request, response) => {
  const language = {
    languageName: request.body.languageName,
    languageCode: request.body.languageCode,
    readingLevel: request.body.readingLevel,
    writingLevel: request.body.writingLevel,
    understandingLevel: request.body.understandingLevel
  }
  Language.create(language).then(data => {
    response.send(data)
  }).catch(err => {
    response.status(500).send({
      message: err.message || 'Some error occured while creating the Language'
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
  Language.findByPk(param).then(languages => response.status(200).json(languages))
}


/**
 * 
 * @param {*} request 
 * @param {*} response 
 * @method findByName or findByPk
 */
exports.findByName = (request, response) => {
  const languageName = request.params.name
  const condition = languageName ? { languageName: { [Op.like]: `%${languageName}%` } } : null
  Language.findAll({ where: condition })
    .then(data => response.status(200).json(data))
    .catch(err => {
      response.status(500).send({
        message: err.message || 'Some error occured while retrieving languages'
      })
    })
}

/**
 * 
 * @param {*} request 
 * @param {*} response 
 * @comment update Language
 */
exports.update = (request, response) => {
  const id = request.params.id

  Language.update(request.body, {
    where: { languageId: id }
  }).then(data => {
    if (data === 1) {
      response.status(200).json({ message: 'Language was updated successfully!' })
    } else {
      response.status(201).json({ message: 'Cannot update Language with id=' + id })
    }
  }).catch(err => {
    response.json({ message: err }).status(500)
  })
}  

exports.delete = (request, response) => {
  const languageId = request.params.id
  Language.destroy({
    where: { languageId: languageId }
  }).then(data => {
    if (data === 1) {
      response.status(200).json({ message: 'Language was deleted successfully!' })
    } else {
      response.status(201).json({ message: 'Cannot delete Language with id=' + languageId })
    }
  }).catch(err => {
    response.json({ message: err }).status(500)
  })
}
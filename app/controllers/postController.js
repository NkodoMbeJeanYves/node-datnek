const Company = require('../models/Company')

/**
 * 
 * @param {*} request 
 * @param {*} response 
 * @param {*} next 
 * @Comment get all resources
 */
exports.index = (request, response, next) => {
  const mysqlObject = request.app.get('config')
  mysqlObject.query(
    'SELECT * FROM COMPANIES',
    (err, rows, fields) => {
      if (!err) {
        response.json(rows)
      } else {
        console.log(err)
      }
    }
  )
}

/**
 * 
 * @param {*} request 
 * @param {*} response 
 * @Comment post incoming data
 */
exports.store = (request, response) => {
  const company = new Company()
  company.save(request, response)

}

exports.show = (request, response) => {

}

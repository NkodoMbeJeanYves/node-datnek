
const express = require('express')
const app = express()
const companyRouteApi = require('./api/companyRouteApi')
const languageRouteApi = require('./api/languageRouteApi')
const uploadController = require('../controllers/UploadController')
const path = require('path')

// company route
app.use('/company', companyRouteApi)

// Language route
app.use('/language', languageRouteApi)

// upload route
app.use('/upload', uploadController.upload)

app.use('/load', (req, res) => {
  res.sendFile(path.join(__dirname, '/../../load.html'))
})

module.exports = app

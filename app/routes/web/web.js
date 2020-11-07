const express = require('express')
const app = express()
const postRoutesApi = require('./postRoutesApi')

app.use('/', postRoutesApi)

module.exports = app

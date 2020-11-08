const express = require('express')
const app = express()
const apiRoutes = require('./app/routes/api')
// const webRoutes = require('./app/routes/web')
const bodyParser = require('body-parser')
const db = require('./app/models')
const PORT = process.env.PORT || 3000

// app.set('config', mysqlConnection)
app.use(bodyParser.urlencoded({ extended: true }))
// app.use(express.json())
app.use(bodyParser.json())

// load configuration
db.sequelize.sync().then(
  () => {
    app.listen(PORT, () => {
      console.log(`Listening on http://localhost:${PORT}`)
    })
  }
)

// lead in api routes file api.js
app.use('/api', apiRoutes)

// lead in web routes file api.js
// app.use('/', webRoutes)
// Handling error
app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

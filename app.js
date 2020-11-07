const express = require('express')
const app = express()
const apiRoutes = require('./app/routes/api')
const webRoutes = require('./app/routes/web')
const bodyParser = require('body-parser')
var cors = require('cors')
const fileUpload = require('express-fileupload')






// Database Config
const mysql = require('mysql')
var mysqlConnection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'datnek_api',
  multipleStatements: true
})
mysqlConnection.connect(
  (err) => {
    if (!err) {
      console.log('Successfully connected!')
    } else {
      console.log('Connection failed!')
    } 
  }
)



// make sure we can retrieve json posted data
app.use(bodyParser.json())

app.use(bodyParser.urlencoded({ extended: true }))

// enable file upload
app.use(fileUpload)

// Enable Cross Origin Ressource Sharing
app.use(cors())
// leading to api routes file api.js
app.use('/api', apiRoutes)


// lead in web routes file api.js
app.use('/', webRoutes)
// Handling error
app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

// Listening to the server
app.listen(3000)

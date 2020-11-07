const app = (require('express'))()

class MySQL {

  mysql = null
  mysqlConnection = null
  constructor () {
    
  }

  connectToDb() {
    this.mysql = require('mysql')
    this.mysqlConnection = this.mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'datnek'
    })
    this.mysqlConnection.connect(
      (err) => {
        if (!err) {
          console.log('Successfully connected!')
        } else {
          console.log('Connection failed!')
        }
      }
    )
    
    app.set('config', 'connection object')
     
  }
    
  get link() {
    return this.mysqlConnection;
  }
}

module.exports = MySQL


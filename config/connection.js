// const connection = require("express");
const mysql = require("mysql");

let connection;
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {
  connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'mesmes',
    database: 'burgers_db'
  });
}





// const PORT = process.env.PORT || 8080;



// const connection = mysql.createConnection({
//     host : 'localhost',
//     port : PORT,
//     username: 'root',
//     password: 'mesmes',
//     database: 'burgers_db'
// })

// Initiate MySQL Connection.
connection.connect(err => {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
  });

  module.exports =  connection;
  
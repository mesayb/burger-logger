// const connection = require("express");
const mysql = require("mysql");


const PORT = process.env.PORT || 8080;



const connection = mysql.createConnection({
    host : 'localhost',
    port : PORT,
    username: 'root',
    password: 'mesmes',
    database: 'burgers_db'
})

// Initiate MySQL Connection.
connection.connect(err => {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
  });

  module.exports =  connection;
const express = require("express");
const serverless = require("serverless-http");
const app = express();
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: "todoapplication"
});

app.get("/tasks", function(request, response) {
  const username = request.query.username;

  let queryToExecute = "SELECT * FROM Task";
  
  if (username) {
    query =
      "SELECT * FROM Task JOIN User on Task.UserId = User.UserId " +
      "WHERE User.Username = " + connection.escape(username);
  }

  connection.query(queryToExecute, (err, queryResults) => {
    if (err) {
      console.log("Error fetching tasks", err);
      response.status(500).json({
        error: err
      });
      
    } else {
      response.json({
        tasks: queryResults
      });
    }
  });
});

module.exports.handler = serverless(app);
